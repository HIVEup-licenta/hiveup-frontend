import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./NavbarStyle.css"
import HiveIcon from '@mui/icons-material/Hive';

export default function Navbar() {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
        <HiveIcon />
        HIVEup
    </Link>
    <ul>
        <CustomLink to="/myprofile">MyProfile</CustomLink>
        <CustomLink to="/history">History</CustomLink>
    </ul>
   </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
