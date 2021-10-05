import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getLatestStories, getTopStories } from "../../Actions/storyActions";
import TopStory from "../../Components/STORY-FRAMES/TOP-STORY/TopStory";
import LatestStory from "../../Components/STORY-FRAMES/LATEST-STORY/LatestStory";
import TopStoryCarousel from "../../Components/STORY-FRAMES/TOP-STORY/TopStoryCarousel";
import LatestStoryCarousel from "../../Components/STORY-FRAMES/LATEST-STORY/LatestStoryCarousel";

const Home = () => {
  const dispatch = useDispatch();

  const storiesTopList = useSelector((state) => state.storiesTopList);
  const { topStories } = storiesTopList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const storiesLatestList = useSelector((state) => state.storiesLatestList);
  const { latestStories } = storiesLatestList;

  const storyWriteContent = useSelector((state) => state.storyWriteContent);
  const { success } = storyWriteContent;

  useEffect(() => {
    dispatch(getTopStories());
    dispatch(getLatestStories());
  }, [dispatch]);

  return (
    <div className="home">
      <div
        className="dlab-bnr-inr overlay-black-middle"
        style={{ backgroundImage: "url(" + "/images/banner/bnr1.jpg" + ")" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <p className="text" class="main-header">
              Write And Read
            </p>
            <br />
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>Short Story</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-header">
        <div className="home-header-links">
          <div className="home-header-links-write-story">
            <span className="home-header-title-3">
              Start Writing A Short Story
            </span>
            <Link
              className="btn"
              class="site-button outline m-l5"
              to={userInfo ? "/write-story-details" : "/register"}
            >
              Write Story
            </Link>
          </div>

          <div className="home-header-links-explore-story">
            <span className="home-header-title-4">Explore Amazing Stories</span>
            <Link to="stories" className="btn" class="site-button outline m-l5">
              See Stories
            </Link>
          </div>
        </div>
      </div>

      <div className="home-top-stories">
        <span className="home-top-stories-title">TOP THREE STORIES</span>

        <div className="home-top-stories-list">
          <div className="home-top-story-carousel">
            <TopStoryCarousel />
          </div>

          <div className="home-top-story-large">
            {topStories &&
              topStories.map((story) => <TopStory story={story} />)}
          </div>
        </div>
      </div>

      <div className="home-latest-stories">
        <span className="home-latest-stories-title">LATEST STORIES</span>
        <div className="home-latest-stories-list">
          <div className="home-top-story-carousel">
            <LatestStoryCarousel />
          </div>
          <div className="home-top-story-large">
            {latestStories &&
              latestStories.map((story) => <LatestStory story={story} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
