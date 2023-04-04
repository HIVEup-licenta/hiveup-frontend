// import {Navbar} from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
import MyFeed from "./pages/MyFeed/MyFeed";
import History from "./pages/History/History";
import MyProfile from "./pages/MyProfile/MyProfile";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";

function App() {
  const [navVisible, showNavbar] = useState(false);
  return (
    <div>
      {/* <Routes>
        <Route path="/">
          <DashboardLayout />
        </Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<MyFeed />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
