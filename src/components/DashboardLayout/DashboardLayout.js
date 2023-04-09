import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from 'react';
import "./DashboardStyle.css";
import MyFeed from "../../pages/MyFeed/MyFeed";
import History from "../../pages/History/History";
import MyProfile from "../../pages/MyProfile/MyProfile";

export default function DashboardLayout({ children }) {
  return (
    
    <div className="dashboard">
      <div className="dashboard-header-navigation">
        <Header />
        <Navbar />
        <Footer />
      </div>
      <div className="dashboard-body">
        <div className="dasboard-items">
           {children}
        </div>
      </div>
      {/* <div className="dasboard-items">{children}</div> */}
    </div>
   
  );
}
