import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT, USER_UPDATE_RESET } from "../../Constants/userConstants";
import { useHistory } from "react-router-dom";
import { deleteStory, getMyStories } from "../../Actions/storyActions";
import MyStory from "../../Components/STORY-FRAMES/MY-STORY/MyStory";
import { STORY_DELETE_RESET } from "../../Constants/storyConstants";

const MyStories = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const myStoriesList = useSelector((state) => state.myStoriesList);
  const { myStories } = myStoriesList;

  const storyDelete = useSelector((state) => state.storyDelete);
  const { success } = storyDelete;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    dispatch(getMyStories());
  }, [dispatch, history, userInfo, success]);

  const deleteStoryHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(deleteStory(id));
    }
  };

  return (
    <div className="my-stories">
      <div className="my-stories-header">
        <div className="container">
          <span className="my-stories-header-title">my stories</span>
        </div>
      </div>
      <div className="my-stories-list">
        {myStories.map((story) => (
          <MyStory
            key={story._id}
            story={story}
            onDelete={deleteStoryHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MyStories;
