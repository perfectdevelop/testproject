import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { newPassword } from "../../Actions/userActions";

const NewPassword = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { token } = match.params.token;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/my-profile");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    dispatch(newPassword(password, token));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="form-control"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewPassword;
