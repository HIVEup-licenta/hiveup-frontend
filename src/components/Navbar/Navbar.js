import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavbarStyle.css";

export default function Navbar() {

	return (
		<>
          <div className="side-navigation">
			<div className="nav-links">
				<span>
				<NavLink to="/">
					<span>My Feed</span>
				</NavLink>
				</span>

				<span>
				<NavLink to="/myprofile">
					<span>My Profile</span>
				</NavLink>
				</span>

				<span>
				<NavLink to="/history">
					<span>History</span>
				</NavLink>
				</span>

			</div>
          </div>
		</>
  );
}

// export default Navbar;
