import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_ACTIVATE_REQUEST,
  USER_ACTIVATE_SUCCESS,
  USER_ACTIVATE_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_LIST_RESET,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_IMAGE_REQUEST,
  USER_UPDATE_IMAGE_SUCCESS,
  USER_UPDATE_IMAGE_FAIL,
  USER_UPDATE_IMAGE_RESET,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_FOLLOW_REQUEST,
  USER_FOLLOW_SUCCESS,
  USER_FOLLOW_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UNFOLLOW_REQUEST,
  USER_UNFOLLOW_FAIL,
  USER_UNFOLLOW_SUCCESS,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_NEW_PASSWORD_REQUEST,
  USER_NEW_PASSWORD_SUCCESS,
  USER_NEW_PASSWORD_FAIL,
} from "../Constants/userConstants";

export const getUsers = (firstname = "") => async (dispatch, getState) => {
  try {
    dispatch({
      type: USERS_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/users?firstname=${firstname}`, config);

    dispatch({
      type: USERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
  document.location.href = "/signin";
};

export const register = (
  firstname,
  lastname,
  age,
  region,
  email,
  password,
  image
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post("/users/register", {
      firstname,
      lastname,
      age,
      region,
      email,
      password,
      image,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const activateAccount = (token) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ACTIVATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`/users/activate-account`, { token });

    dispatch({
      type: USER_ACTIVATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_ACTIVATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_SUCCESS,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/users/profile`,

      config
    );

    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const follow = (userId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_FOLLOW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/users/follow`, { userId }, config);

    dispatch({
      type: USER_FOLLOW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FOLLOW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const unfollow = (userId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UNFOLLOW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/users/unfollow`, { userId }, config);

    dispatch({
      type: USER_UNFOLLOW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UNFOLLOW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPassword = (email) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/users/reset-password`,
      { email },
      config
    );

    dispatch({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const newPassword = (password, token) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_NEW_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/users/new-password`,
      { password, token },
      config
    );

    dispatch({
      type: USER_NEW_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_NEW_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
