import { NavLink } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useLogout } from "../../firebaseFunctions/auth";
import "./HeaderStyle.css";

export default function Header() {
  const { logout, isLoading } = useLogout();
  // const logOut = () => {
  //   window.localStorage.clear();
  //   window.location.href = "./login";
  // };
  // const [navVisible, showNavbar] = useState(false);
  return (
    <div className="header">
      <span className="site-title">
        <HiveIcon className="site-title-icon" />
        {/* <NavLink to="/"> */}
          <span className="site-title-text">HIVEup</span>
        {/* </NavLink> */}
      </span>
      
      {/* <span className="log-out-btn">
        <LogoutIcon className="log-out-icon" />
        <NavLink>
          <span className="log-out-btn">Log out</span>
        </NavLink>
      </span> */}
       {/* <button onClick={logOut} className="btn btn-primary"> */}
       <button onClick={logout}
          isLoading={isLoading}
           className="btn btn-primary">
            Log Out
        </button>
    </div>
  );
}

