import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getStoryDetails } from "../../Actions/storyActions";

const Reader = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const storyDetails = useSelector((state) => state.storyDetails);
  const { story } = storyDetails;
  const { author } = story;
  const storyId = match.params.id;
  useEffect(() => {
    dispatch(getStoryDetails(storyId));
  }, [dispatch]);

  return (
    <div className="reader">
      <div className="reader-header">
        <div className="container">
          <span className="reader-header-title">{story.title}</span>
          <span className="reader-header-title">
            {author.firstname} {author.lastname}
          </span>
        </div>
      </div>
      <div className="container">{story.content}</div>
    </div>
  );
};

export default Reader;
