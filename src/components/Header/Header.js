import { NavLink } from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import "./HeaderStyle.css";

export default function Header() {
  // const [navVisible, showNavbar] = useState(false);
  return (
    <div className="header">
      <span className="site-title">
        <HiveIcon className="site-title-icon" />
        <NavLink to="/">
          <span className="site-title-text">HIVEup</span>
        </NavLink>
      </span>
      <span className="log-out-btn">
        <LogoutIcon className="log-out-icon" />
        <NavLink>
          <span className="log-out-btn">Log out</span>
        </NavLink>
      </span>
    </div>
  );
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
