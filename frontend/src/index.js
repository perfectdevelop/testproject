import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

import "./styles/main.css";
import "./styles/email-sent.css";

import "./Screens/Register/register.css";
import "./Screens/Register/activate.css";
import "./Screens/LOGIN/login.css";
import "./Screens/PROFILE/profile.css";
import "./Screens/USER-PROFILE/user-profile.css";
import "./Screens/Home/home.css";
import "./Components/navbar.css";
import "./Components/SEARCH/search.css";
import "./Components/STORY-FRAMES//TOP-STORY/top-story.css";
import "./Components/STORY-FRAMES/LATEST-STORY/latest-story.css";
import "./Components/STORY-FRAMES/ALL-STORY/all-story.css";
import "./Screens/STORIES/stories.css";
import "./Screens/STORY-PREVIEW/story-preview.css";
import "./Screens/REVIEWS/reviews.css";
import "./Components/REVIEW/review.css";
import "./Components/STORY-FRAMES/MY-STORY/my-story.css";
import "./Screens/WRITE-STORY/DETAILS/write-story-details.css";
import "./Screens/WRITE-STORY/CONTENT/write-story-content.css";
import "./Screens/READER/reader.css";
import "./Components/STORY-FRAMES/TOP-STORY/top-story-carousel.css";
import "./Components/STORY-FRAMES/LATEST-STORY/latest-storyy.css";
import "./Screens/MY-STORIES/my-stories.css";

import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
import "./styles/bootstrap/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
