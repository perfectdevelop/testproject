import axios from "axios";
import {
  STORIES_LIST_REQUEST,
  STORIES_LIST_SUCCESS,
  STORIES_LIST_FAIL,
  STORIES_LIST_RESET,
  STORIES_TOP_REQUEST,
  STORIES_TOP_SUCCESS,
  STORIES_TOP_FAIL,
  STORIES_TOP_RESET,
  STORIES_LATEST_REQUEST,
  STORIES_LATEST_SUCCESS,
  STORIES_LATEST_FAIL,
  STORIES_LATEST_RESET,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL,
  STORY_DETAILS_RESET,
  STORY_WRITE_DETAILS_REQUEST,
  STORY_WRITE_DETAILS_SUCCESS,
  STORY_WRITE_DETAILS_FAIL,
  STORY_WRITE_DETAILS_RESET,
  STORY_WRITE_CONTENT_REQUEST,
  STORY_WRITE_CONTENT_SUCCESS,
  STORY_WRITE_CONTENT_FAIL,
  STORY_WRITE_CONTENT_RESET,
  MY_STORIES_REQUEST,
  MY_STORIES_SUCCESS,
  MY_STORIES_FAIL,
  STORY_DELETE_REQUEST,
  STORY_DELETE_SUCCESS,
  STORY_DELETE_FAIL,
  STORY_ADD_REVIEW_REQUEST,
  STORY_ADD_REVIEW_SUCCESS,
  STORY_ADD_REVIEW_FAIL,
  STORY_REPORT_REQUEST,
  STORY_REPORT_SUCCESS,
  STORY_REPORT_FAIL,
  STORY_DELETE_RESET,
} from "../Constants/storyConstants";

export const getStories = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({
      type: STORIES_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/stories?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    );

    if (data) {
      dispatch({
        type: STORIES_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: STORIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTopStories = () => async (dispatch) => {
  try {
    dispatch({
      type: STORIES_TOP_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/stories/top", config);
    if (data) {
      dispatch({
        type: STORIES_TOP_SUCCESS,
        data: data,
      });
    }
  } catch (error) {
    dispatch({
      type: STORIES_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLatestStories = () => async (dispatch) => {
  try {
    dispatch({
      type: STORIES_LATEST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/stories/latest", config);
    if (data) {
      dispatch({
        type: STORIES_LATEST_SUCCESS,
        data: data,
      });
    }
  } catch (error) {
    dispatch({
      type: STORIES_LATEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyStories = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MY_STORIES_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/stories/my-stories", config);

    dispatch({
      type: MY_STORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MY_STORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getStoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STORY_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/stories/${id}`, config);

    dispatch({
      type: STORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const writeStoryDetails = (storyInfo) => async (dispatch) => {
  try {
    dispatch({
      type: STORY_WRITE_DETAILS_REQUEST,
    });

    dispatch({
      type: STORY_WRITE_DETAILS_SUCCESS,
      payload: storyInfo,
    });

    localStorage.setItem("storyInfo", JSON.stringify(storyInfo));
  } catch (error) {
    dispatch({
      type: STORY_WRITE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const writeStoryContent = (story) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORY_WRITE_CONTENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/stories/write-story`, story, config);

    dispatch({
      type: STORY_WRITE_CONTENT_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("storyInfo");
  } catch (error) {
    dispatch({
      type: STORY_WRITE_CONTENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteStory = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORY_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/stories/${id}`, config);

    dispatch({
      type: STORY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: STORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addReview = (storyId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORY_ADD_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/stories/${storyId}/add-review`,
      review,
      config
    );

    dispatch({
      type: STORY_ADD_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORY_ADD_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
