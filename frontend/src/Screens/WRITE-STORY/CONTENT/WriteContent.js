import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { writeStoryContent } from "../../../Actions/storyActions";

const WriteContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState("");

  const storyWriteDetails = useSelector((state) => state.storyWriteDetails);
  const { storyInfo } = storyWriteDetails;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      writeStoryContent({
        title: storyInfo.title,
        genre: storyInfo.genre,
        interestAge: storyInfo.interestAge,
        language: storyInfo.language,
        summary: storyInfo.summary,
        content: content,
      })
    );
    history.push("/");
  };

  return (
    <div className="write-story-content">
      <form className="write-story-content-form" onSubmit={submitHandler}>
        <button type="submit" className="btn">
          Publish
        </button>
        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default WriteContent;
