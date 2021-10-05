import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { resetPassword } from "../../Actions/userActions";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push("/my-profile");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
