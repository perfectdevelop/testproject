import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const reportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    reason: { type: String, required: true },
  },
  { timestamps: true }
);

const StorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      image: { type: String },
    },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    interestAge: { type: String, required: true },
    language: { type: String, required: true },
    characters: [{ type: String }],
    released: { type: Date },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number },
    numReviews: { type: Number },
    reports: [reportSchema],
    numReports: { type: Number },
    blockedMessage: { type: String },
    reported: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Story = mongoose.model("Story", StorySchema);

export default Story;
