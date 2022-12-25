import React from "react";
import "./UserHome.css";
import Slideshow from "./Slideshow";
import Product from "./Product";

import { useNavigate } from "react-router";

export default function UserHome() {
  let navigate = useNavigate();
  const gotologin = () => {
    navigate("/");
  };

  const gotoprofile = () => {
    navigate("/profile");
  };

  const gotochallenge = () => {
    navigate("/challenges");
  };
  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
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
          <span id="profile" onClick={menuToggle}>
            Profile
          </span>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li onClick={gotologin}>Logout</li>
          <li onClick={gotoprofile}>Profile</li>
          <li onClick={gotochallenge}>Code Challenge</li>
        </ul>
      </div>
      <div className="carousel">
        <Slideshow />
      </div>
      <div className="products">
        <Product />
      </div>
    </div>
  );
}
