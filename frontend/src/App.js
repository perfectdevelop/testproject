import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Activate from "./Screens/Register/Activate";
import Register from "./Screens/Register/Register";
import Login from "./Screens/LOGIN/Login";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home/Home";
import Profile from "./Screens/PROFILE/Profile";
import UserProfile from "./Screens/USER-PROFILE/UserProfile";
import { deleteUser } from "./Actions/userActions";
import EmailSent from "./Screens/EmailSent";
import ResetPassword from "./Screens/RESET-PASSWORD/ResetPassword";
import NewPassword from "./Screens/NEW-PASSWORD/NewPassword";
import Stories from "./Screens/STORIES/Stories";
import StoryPreview from "./Screens/STORY-PREVIEW/StoryPreview";
import WriteDetails from "./Screens/WRITE-STORY/DETAILS/WriteDetails";
import WriteContent from "./Screens/WRITE-STORY/CONTENT/WriteContent";
import MyStories from "./Screens/MY-STORIES/MyStories";
import Reviews from "./Screens/REVIEWS/Reviews";
import Reader from "./Screens/READER/Reader";
import MU from "./Screens/MU";
import Footer from "./markup/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/stories/:pageNumber" component={Stories} />
      <Route path="/page/:pageNumber" component={Stories} />
      <Route path="/search/:keyword" component={Stories} />

      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/activate/:token" component={Activate} />
      <Route path="/signin" component={Login} />
      <Route path="/email-sent" component={EmailSent} />

      <Route path="/my-profile" component={Profile} />
      <Route path="/user-profile/:id" component={UserProfile} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/new-password/:token" component={NewPassword} />

      <Route path="/stories" component={Stories} />
      <Route path="/preview/:id" component={StoryPreview} />
      <Route path="/write-story-details" component={WriteDetails} />
      <Route path="/write-story-content" component={WriteContent} />
      <Route path="/my-stories" component={MyStories} />
      <Route path="/reviews/:id" component={Reviews} />
      <Route path="/reader/:id" component={Reader} />
      <Footer />
    </Router>
  );
};

export default App;
