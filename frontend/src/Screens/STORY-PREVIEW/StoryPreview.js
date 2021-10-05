import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getStoryDetails } from "../../Actions/storyActions";
import { useHistory, Link } from "react-router-dom";
import Rating from "../../Components/Rating";
import moment from "moment";
import Review from "../../Components/REVIEW/Review";
import { Avatar } from "@material-ui/core";

const StoryPreview = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const storyDetails = useSelector((state) => state.storyDetails);
  const { story } = storyDetails;
  const storyId = match.params.id;
  useEffect(() => {
    dispatch(getStoryDetails(storyId));
  }, [dispatch]);

  return (
    <div className="story-preview">
      <div className="story-preview-header">
        <div className="container">
          <span className="story-preview-header-title">Preview</span>

          <div>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Report
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <button class="dropdown-item">
                  Violence, Racism, Pornography
                </button>
              </li>
              <li>
                <button class="dropdown-item">Copyright</button>
              </li>

              <li>
                <button class="dropdown-item">Terms</button>
              </li>
            </ul>
          </div>

          <div className="story-preview-info-links">
            <Link
              className="btn story-preview-info-links-read"
              to={`/reader/${story._id}`}
            >
              Read
            </Link>
          </div>
        </div>
      </div>

      <div className="story-preview-info">
        <div className="container">
          <div className="story-preview-info-title_rating">
            <span className="story-preview-info-title">{story.title}</span>
            <div className="story-preview-info-rating">
              <Rating value={story.rating} />
              <span>{story.numReviews} reviews</span>
            </div>
          </div>

          <div className="story-preview-info-author">
            <Link className="" to={`/user-profile/${story.user}`}>
              <Avatar
                style={{ width: "150px", height: "150px" }}
                className="story-preview-info-author-image"
                src={story.author.image}
              />
            </Link>
            <Link
              className="btn story-preview-info-author-name"
              to={`/user-profile/${story.user}`}
            >
              {story.author.firstname} {story.author.lastname}
            </Link>
          </div>

          <div className="story-preview-info-details">
            <div>
              <div>
                <span>Genre</span>
                <span>{story.genre}</span>
              </div>
              <div>
                <span>interestAge</span>
                <span>{story.interestAge}</span>
              </div>
            </div>

            <div>
              <div>
                <span>language</span>
                <span>{story.language}</span>
              </div>
              <div>
                <span>released</span>
                <span>{moment(story.released).format("MMMM YYYY")}</span>
              </div>
            </div>
          </div>
          
          <span className="story-preview-info-summary">{story.summary}</span>
        </div>
      </div>

      <div className="reviews-some-list">
        <div>
          {story.reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
        <Link className="btn btn-primary" to={`/reviews/${story._id}`}>
          Add Review
        </Link>
      </div>
    </div>
  );
};

export default StoryPreview;
