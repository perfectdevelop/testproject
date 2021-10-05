import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../../Actions/userActions";
import { useHistory, Link, useParams } from "react-router-dom";

const Activate = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/my-profile");
    }
  });
  const clickHandler = (token) => {
    dispatch(activateAccount(token));
  };

  return (
    <div className="activate">
      <div className="container">
        <span className="activate-title">Please Active Your Account</span><br />
        <button
          className="activate-btn btn btn-success"
          onClick={() => clickHandler(match.params.token)}
        >
          {userInfo ? "Activated" : "Active"}
        </button>
      </div>
    </div>
  );
};

export default Activate;
