import MyFeed from "./pages/MyFeed/MyFeed";
import History from "./pages/History/History";
import MyProfile from "./pages/MyProfile/MyProfile";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<MyFeed />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
