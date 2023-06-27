import { NavLink } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useLogout } from "../../firebaseFunctions/auth";
import "./HeaderStyle.css";

export default function Header() {
  const { logout, isLoading } = useLogout();

  return (
    <div className="header-component">
      {/* <header className="header"> */}
        <span className="site-title">
          <HiveIcon className="site-title-icon" />
          <span className="site-title-hiveup">HIVEup</span>
        </span>

        <div className="log-out-component">
          <span className="log-out">
            <LogoutIcon className="log-out-icon" />
            <button
              onClick={logout}
              isLoading={isLoading}
              className="log-out-btn"
            >
              Log Out
            </button>
          </span>
        </div>
      {/* </header> */}
    </div>
  );
}
