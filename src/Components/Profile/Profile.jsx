import "./Profile.css";
import { Link } from "react-router-dom";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="Profile">
        <Link to="/">
          <img
            className="ProfileLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="Amazone_Logo"
          />
        </Link>
        <div className="ProfileContainer">
          <h1>Your Profile</h1>
          <form>
            <h5>Name</h5>
            <input type="text" placeholder="Enter Your Name" required />

            <h5>Email</h5>
            <input type="email" placeholder="Enter Your Email" disabled />

            <h5>Mobile No.</h5>
            <input type="text" placeholder="Enter Your Contact Number" />

            <button className="ProfileSigninButton">Update Profile</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
