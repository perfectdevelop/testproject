import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getStoryDetails } from "../../Actions/storyActions";
import { useHistory, Link } from "react-router-dom";
import moment from "moment";
import Review from "../../Components/REVIEW/Review";

const Reviews = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const storyId = match.params.id;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const storyDetails = useSelector((state) => state.storyDetails);
  const { story } = storyDetails;
  const storyAddReview = useSelector((state) => state.storyAddReview);
  const { success, error } = storyAddReview;

  useEffect(() => {
    dispatch(getStoryDetails(storyId));
    if (success) {
      alert("Review added");
    }
  }, [dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addReview(storyId, { rating, comment }));
  };
  return (
    <div className="reviews">
      <div className="reviews-header">
        <div className="container">
          <span className="reviews-header-title">Add Your Review</span>
          <span className="reviews-header-title">{story.title}</span>
        </div>
      </div>
      <form className="story-preview-form" onSubmit={submitHandler}>
        <div className="inputs">
          <select
            className="form-control"
            id=""
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <textarea
            className="form-control"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <div className="reviews-list">
        {story.reviews.map((review) => (
          <div className="container">
            <Review review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
