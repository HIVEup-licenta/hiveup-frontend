import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from "react";
import "./DashboardStyle.css";

export default function DashboardLayout({ children }) {
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
            <div className="dasboard-items">{children}</div>
          </div>
        </div>
        <div className="dashboard-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
