import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  usersListReducer,
  userLoginReducer,
  userRegisterReducer,
  userActivateReducer,
  userUpdateReducer,
  userDeleteReducer,
  userFollowReducer,
  userDetailsReducer,
  userUnfollowReducer,
  userResetPasswordReducer,
  userNewPasswordReducer,
} from "./Reducers/userReducers";
import {
  storiesListReducer,
  storiesTopListReducer,
  storiesLatestListReducer,
  storyDetailsReducer,
  storyWriteDetailsReducer,
  storyWriteContentReducer,
  myStoriesListReducer,
  storyDeleteReducer,
  storyAddReviewReducer,
} from "./Reducers/storyReducers";

const reducer = combineReducers({
  usersList: usersListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userActivate: userActivateReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  userFollow: userFollowReducer,
  userDetails: userDetailsReducer,
  userUnfollow: userUnfollowReducer,
  userResetPassword: userResetPasswordReducer,
  userNewPassword: userNewPasswordReducer,

  storiesList: storiesListReducer,
  storiesTopList: storiesTopListReducer,
  storiesLatestList: storiesLatestListReducer,
  myStoriesList: myStoriesListReducer,
  storyDetails: storyDetailsReducer,
  storyWriteDetails: storyWriteDetailsReducer,
  storyWriteContent: storyWriteContentReducer,
  storyDelete: storyDeleteReducer,
  storyAddReview: storyAddReviewReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const storyInfoFromStorage = localStorage.getItem("storyInfo")
  ? JSON.parse(localStorage.getItem("storyInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  storyWriteDetails: { storyInfo: storyInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
