import expressAsyncHandler from "express-async-handler";
import Story from "../Model/StoryModel.js";
import mailgun from "mailgun-js";
import User from "../Model/UserModel.js";

export const getStories = expressAsyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Story.countDocuments({ ...keyword });

  const stories = await Story.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (stories) {
    res.json({ stories, page, pages: Math.ceil(count / pageSize) });
  } else {
    throw new Error("There is no story");
  }
});
export const deleteStories = expressAsyncHandler(async (req, res) => {
  await Story.deleteMany();
  res.json("Stories Deleted");
});

export const getStoryById = expressAsyncHandler(async (req, res) => {
  const story = await Story.findById(req.params.id);

  if (story) {
    res.json(story);
  }
  throw new Error("Story not found");
});
export const getTopStories = expressAsyncHandler(async (req, res) => {
  const topStories = await Story.find({}).sort({ rating: -1 }).limit(3);
  res.json(topStories);
});
export const getLatestStories = expressAsyncHandler(async (req, res) => {
  const latestStories = await Story.find({}).sort({ released: -1 }).limit(3);
  res.json(latestStories);
});
export const getMyStories = expressAsyncHandler(async (req, res) => {
  const title = req.query.title || "";
  const titleFilter = title ? { title: { $regex: title, $options: "i" } } : {};

  const myStories = await Story.find({ ...titleFilter, user: req.user._id });

  if (!myStories) {
    throw new Error("There is no story");
  }
  res.json(myStories);
});
export const writeStory = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const {
    title,
    genre,
    interestAge,
    language,
    characters,
    summary,
    content,
  } = req.body;

  if (!title || !genre || !interestAge || !language || !summary || !content) {
    throw new Error("All fields required");
  }

  const story = new Story({
    user: req.user._id,
    author: {
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      image: req.user.image,
    },
    title,
    genre,
    interestAge,
    language,
    summary,
    content,
    released: Date(),
  });

  await story.save();
  res.json(story);
});
export const deleteStory = expressAsyncHandler(async (req, res) => {
  const story = await Story.findById(req.params.id);

  if (!story) {
    throw new Error("Story not found");
  }
  await story.remove();
  res.json("Story removed");
});

export const addReview = expressAsyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const story = await Story.findById(req.params.id);
  if (story) {
    const alreadyReviewed = story.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      throw new Error("Already reviewed");
    }

    const review = {
      user: req.user._id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      image: req.user.image,
      rating: Number(rating),
      comment,
    };
    story.reviews.push(review);
    story.rating =
      story.reviews.reduce((acc, item) => item.rating + acc, 0) /
      story.reviews.length;

    await story.save();
    res.json("Review added");
  }
  throw new Error("Story not found");
});

export const reportStory = expressAsyncHandler(async (req, res) => {
  const { reason } = req.body;

  const story = await Story.findById(req.params.id);
  if (story) {
    const report = {
      user: req.user._id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      reason,
    };
    story.reports.push(report);
    story.numReports = story.reports.length;

    await story.save();
    res.json("Reported success");
  }
  throw new Error("Story not found");
});
