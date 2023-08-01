import { Link } from "react-router-dom";
import React from "react";

import "./Login.css";
const Login = () => {
  return (
    <>
      {/* */}

      <div className="Login">
        <Link to="/">
          <img
            className="LoginLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="Amazone_Logo"
          />
        </Link>

        {/* Login Form Start */}

        <div className="LoginContainer">
          <h2>Sign In</h2>
          <form method="POST">
            <h4>Email</h4>
            <input type="email" placeholder="Enter Email" />

            <h4>Password</h4>
            <input type="password" placeholder="Enter Password" />

            <button className="LoginButton">Sign In</button>
          </form>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <buttom className="LoginRegisterButton">
            Create Your Amazon Account
          </buttom>
          <br />
          <p style={{ textAlign: "center" }}>Login With:</p>

          <a className="LoginSignInButtonGoogle">
            <img
              className="loginGoogleImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
              alt=""
            />
          </a>
        </div>

        {/* Login Form End*/}
      </div>
    </>
  );
};

export default Login;
