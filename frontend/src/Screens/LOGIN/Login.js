import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../Actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/my-profile");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="login-header">
        <div className="container">
          <span className="login-header-title">Sign in</span>
          <Link to="/register" className="btn login-header-title">
            Don't have an account?
          </Link>
        </div>
      </div>
      <div className="section-full content-inner-2 shop-account bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="font-weight-700 m-t0 m-b20">Login Your Account</h3>
            </div>
          </div>
          <div>
            <div className="max-w500 m-auto">
              <div className="p-a30 border-1 seth">
                <div className="tab-content nav">
                  <form
                    id="login"
                    className="tab-pane active col-12 p-a0 "
                    onSubmit={submitHandler}
                  >
                    <h4 className="font-weight-700">LOGIN</h4>
                    <p className="font-weight-600">
                      If you have an account with us, please log in.
                    </p>
                    <div className="form-group">
                      <label
                        className="font-weight-700"
                        htmlFor="loginFormEmail"
                      >
                        EMAIL
                      </label>
                      <input
                        name="dzName"
                        required=""
                        className="form-control"
                        placeholder="Your Email"
                        type="email"
                        id="loginFormEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        className="font-weight-700"
                        htmlFor="loginFormPassword"
                      >
                        PASSWORD
                      </label>
                      <input
                        name="dzName"
                        required=""
                        id="loginFormPassword"
                        className="form-control "
                        placeholder="Type Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-left">
                      <button className="site-button m-r5 button-lg radius-no">
                        Login
                      </button>
                      <a
                        data-toggle="tab"
                        href="#forgot-password"
                        className="m-l5"
                      >
                        <i className="fa fa-unlock-alt"></i> Forgot Password
                      </a>
                    </div>
                  </form>
                  <form
                    id="forgot-password"
                    className="tab-pane fade  col-12 p-a0"
                  >
                    <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                    <p className="font-weight-600">
                      We will send you an email to reset your password.{" "}
                    </p>
                    <div className="form-group">
                      <label className="font-weight-700">EMAIL</label>
                      <input
                        name="dzName"
                        required=""
                        className="form-control"
                        placeholder="Your Email Id"
                        type="email"
                      />
                    </div>
                    <div className="text-left">
                      <a
                        className="site-button outline gray button-lg radius-no"
                        data-toggle="tab"
                        href="#login"
                      >
                        Back
                      </a>
                      <button className="site-button pull-right button-lg radius-no">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
