import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import "./MyFeedStyle.css";

export default function MyFeed() {
  return (
    <DashboardLayout>
      <div className="my-feed">
        <div className="my-feed-container">
          <div className="my-feed-title">My Profile</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
