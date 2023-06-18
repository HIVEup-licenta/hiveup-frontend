import React from "react";
import { NavLink } from "react-router-dom";
import FeedIcon from "@mui/icons-material/Feed";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from "react-router-dom";
import {
  APP_PROTECTED_URL,
  APP_MYFEED_URL,
  APP_PROFILE_URL,
  APP_HOSTORY_URL,
} from "../../pages/shared/constants";
import { useAuth } from "../../firebaseFunctions/auth";
import "./NavbarStyle.css";

export default function Navbar() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading...";

  return (
    <>
      <div className="side-navigation">
        <div className="nav-links">
          <div className="nav-items">
            <span className="nav-item">
              <EventNoteIcon className="nav-icon" />
              {/* <NavLink to="/">
                <span className="nav-text">My Feed</span>
              </NavLink> */}
              <Link
                as={Link}
                to={`${APP_PROTECTED_URL}/myFeed`}
              >
                <span className="nav-text">My Feed</span>
              </Link>
            </span>

            <span className="nav-item">
              <AccountBoxIcon className="nav-icon" />
              {/* <NavLink to="/myprofile">
                  <span className="nav-text">My Profile</span>
                </NavLink> */}
              {user && (
                <Link
                  as={Link}
                  to={`${APP_PROTECTED_URL}/profile/${user.id}`}
                >
                 <span className="nav-text">My Profile</span>
                </Link>
              )}
            </span>

            <span className="nav-item">
              <FeedIcon className="nav-icon" />
              {/* <NavLink to="/history">
                <span className="nav-text">History</span>
              </NavLink> */}
               {user && (
                <Link
                  as={Link}
                  to={`${APP_PROTECTED_URL}/history/${user.id}`}
                >
                   <span className="nav-text">History</span>
                </Link>
              )}
            </span>

            <span className="nav-item">
              <AddBoxIcon className="nav-icon" />
              {/* <NavLink to="/history">
                <span className="nav-text">History</span>
              </NavLink> */}
               {user && (
                <Link
                  as={Link}
                  to={`${APP_PROTECTED_URL}/newPost`}
                >
                   <span className="nav-text">New Post</span>
                </Link>
              )}
            </span>
          </div>
        </div>
        {/* <span className="nav-art">
          <div className="background"></div>
        </span> */}
        <div className="background"></div>
      </div>
    </>
  );
}
