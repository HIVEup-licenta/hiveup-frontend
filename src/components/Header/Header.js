import { NavLink} from "react-router-dom";
import HiveIcon from "@mui/icons-material/Hive";
import React from "react";
import "./HeaderStyle.css";

export default function Header() {
  // const [navVisible, showNavbar] = useState(false);
  return (
    <div className="header">
      <span className="site-title">
        <NavLink to="/">
          <HiveIcon />
          HIVEup
        </NavLink>
      </span>
      <span className="log-out-btn">
        <NavLink>Log out</NavLink>
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
