import React from "react";
import { NavLink } from "react-router-dom";
import FeedIcon from "@mui/icons-material/Feed";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./NavbarStyle.css";

export default function Navbar() {
  return (
    <>
      <div className="side-navigation">
        
          <div className="nav-links">
            <div className="nav-items">
              <span className="nav-item">
                <EventNoteIcon className="nav-icon" />
                <NavLink to="/">
                  <span className="nav-text">My Feed</span>
                </NavLink>
              </span>

              <span className="nav-item">
                <AccountBoxIcon className="nav-icon" />
                <NavLink to="/myprofile">
                  <span className="nav-text">My Profile</span>
                </NavLink>
              </span>

              <span className="nav-item">
                <FeedIcon className="nav-icon" />
                <NavLink to="/history">
                  <span className="nav-text">History</span>
                </NavLink>
              </span>
            </div>
          </div>
          {/* <span className="nav-art">
          <div className="background"></div>
        </span> */}
        <div className="background">
        </div>
      </div>
    </>
  );
}
