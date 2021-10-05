import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { follow, getUserDetails, unfollow } from "../../Actions/userActions";
import { getStories } from "../../Actions/storyActions";

import { Avatar } from "@material-ui/core";
import AllStory from "../../Components/STORY-FRAMES/ALL-STORY/AllStory";

const UserProfile = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = match.params.id;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const storiesList = useSelector((state) => state.storiesList);
  const { stories } = storiesList;
  const [state, setState] = useState({
    data: "",
  });
  const followData = useSelector((state) => state.userFollow);
  const unfollowData = useSelector((state) => state.userUnfollow);

  useEffect(() => {
    if (Object.keys(followData).includes("message")) {
      setState({ ...state, data: followData.message });
    }
  }, [followData]);

  useEffect(() => {
    if (Object.keys(unfollowData).includes("message")) {
      setState({ ...state, data: unfollowData.message });
    }
  }, [unfollowData]);

  useEffect(() => {
    dispatch(getStories());
    dispatch(getUserDetails(userId));
  }, [dispatch, userInfo, history]);

  const followHandler = () => {
    dispatch(follow(userId));
  };

  const unfollowHandler = () => {
    dispatch(unfollow(userId));
  };

  return (
    <div className="user-profile">
      <div className="user-profile-info">
        <div className="container ">
          <div className="user-profile-info-image_name">
            <Avatar alt="Remy Sharp" src={user.image} />
            <span className="user-profile-info-name">
              {user.firstname} {user.lastname}
            </span>
          </div>
          <div className="user-profile-follow-links">
            {state.data !== "Followed" && (
              <button
                className="btn"
                class="site-button outline m-l5"
                onClick={followHandler}
              >
                Follow
              </button>
            )}
            {state.data === "Followed" && (
              <button
                className="btn"
                class="site-button outline m-l5"
                onClick={unfollowHandler}
              >
                Unfollow
              </button>
            )}
          </div>
          <div className="user-profile-info-details">
            <span className="user-profile-info-age">Age: {user.age}</span>

            <span className="user-profile-info-region">
              From: {user.region}
            </span>
            <span className="user-profile-info-stories-num"></span>
          </div>
        </div>
      </div>
      <div className="user-profile-stories">
        {stories.map(
          (story) =>
            story.user === match.params.id && <AllStory story={story} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
