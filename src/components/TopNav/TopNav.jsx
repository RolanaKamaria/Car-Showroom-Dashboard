import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./TopNav.css";
const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="Search or type" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge">2</span>
          </span>
          <div className="profile">
            <NavLink to="/settings">
              <img src={profileImg} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
