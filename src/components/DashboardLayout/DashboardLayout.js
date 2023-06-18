import React, { useEffect } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebaseFunctions/auth";
import {APP_LOGIN_URL} from "../../pages/shared/constants";
import "./DashboardStyle.css";

// export default function DashboardLayout({ children }) {
export default function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isloading } = useAuth();

  useEffect(() => {
    if (!isloading && pathname.startsWith("/protected") && !user) {
      // console.log("Protected route");
      navigate(APP_LOGIN_URL);
    }
  }, [pathname, user, isloading]);

  if (isloading) return "Loading auth user...";

  return (
    <div className="dashboard">
      <div className="dashboard-page">
        <div className="dashboard-header">
          <Header />
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-row">
            <div className="dashboard-menu">
              <Navbar />
            </div>
            <Outlet />
            {/* <div className="dasboard-items">{children}</div> */}
          </div>
        </div>
        <div className="dashboard-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
