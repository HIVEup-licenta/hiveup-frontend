import React from "react";
// import { Space, Spin } from "antd";
import "./LoadingPageStyle.css";

export default function LoadingPage() {
  return (
    <div className="loader">
      <p>Loading..Please Wait..</p>
      {/* <Space size="middle">
        <Spin size="large" />
      </Space> */}
    </div>
  );
}