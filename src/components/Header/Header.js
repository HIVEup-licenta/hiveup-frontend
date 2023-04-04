import { Link, useMatch, useResolvedPath } from "react-router-dom";
import HiveIcon from '@mui/icons-material/Hive';
import React, {useState} from 'react';
import "./HeaderStyle.css";


export default function Header() {
  const [navVisible, showNavbar] = useState(false);
  return (
    <div className="nav">
    <Link to="/" className="site-title">
        <HiveIcon />
        HIVEup
    </Link>
    
    {/* <ul>
        <CustomLink to="/myprofile">MyProfile</CustomLink>
        <CustomLink to="/myprofile">MyFeed</CustomLink>
        <CustomLink to="/history">History</CustomLink>
    </ul> */}
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
