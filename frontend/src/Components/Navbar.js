import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import { logout } from "../Actions/userActions";
import SearchBox from "./SEARCH/SearchBox";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const clickHandler = () => {
    dispatch(logout());
  };

  return (
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <a class="navbar-brand" href="/">
          Story Ceremony
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item-search">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </li>
            {userInfo ? (
              <>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/stories"
                  >
                    Stories
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/write-story-details">
                    Write Story
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userInfo.firstname}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/my-profile">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/my-stories">
                        My Stories
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-line" />
                    </li>
                    <li>
                      <button onClick={logout} class="dropdown-item">
                        Sign out
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="/signin">
                    Sign in
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signin">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
