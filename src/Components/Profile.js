import React from "react";
import "./UserHome.css";

export default function Profile() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <p id="text">Logo</p>
        </div>
        <div className="right">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ color: "#1fc3c0" }}
          ></i>
          <span id="profile">Profile</span>
        </div>
      </div>

      <div className="details">
        <img
          src="https://i.pinimg.com/236x/68/87/87/6887875f9fe29c98dd9960d97262aa92.jpg"
          alt="Profile Picture"
        />
        <h3>User 1</h3>
        <h3>user1@example.com</h3>
      </div>
      <hr />
      <button className="terms">See T&C</button>
    </div>
  );
}
