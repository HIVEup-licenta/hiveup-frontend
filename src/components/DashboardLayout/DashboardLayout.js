import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import React, {useState} from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import "./DashboardStyle.css";
import MyFeed from "../../pages/MyFeed/MyFeed";
import History from "../../pages/History/History";
import MyProfile from "../../pages/MyProfile/MyProfile";
import { NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    
    <div className="dashboard">
      <head className="dasboard-head">
        <title>HIVEup</title>
      </head>
      <div className="dasboard-header-navigation">
        {/* <Header /> */}
        <Navbar />
      </div>
      {/* <div className="dasboard-items">{children}</div> */}
    </div>
   
  );
}
