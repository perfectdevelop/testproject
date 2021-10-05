import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUsers } from "../Actions/userActions";

const EmailSent = ({ title }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/my-profile");
    }
  }, [userInfo, history]);

  return (
    <div className="email-sent">
      <div className="email-sent-box">
        {title}
        <h3 className="email-sent-box-title">Email sent</h3>
        <h2 className="email-sent-box-sub-title">Please check your email</h2>
       <Link className="btn btn-success" to="/signin">
          Sign in
        </Link> 
      </div>
    </div>
  );
};

export default EmailSent;
