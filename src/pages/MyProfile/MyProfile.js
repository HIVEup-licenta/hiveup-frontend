import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import { useAuth } from "../../firebaseFunctions/auth";
import { APP_PROTECTED_URL } from "../../pages/shared/constants";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import "./MyProfileStyle.css";
import { useUser } from "../../firebaseFunctions/users";

export default function MyProfile() {
  const { user: authUser, isLoading: authLoading } = useAuth();
  // const { user, isLoading } = useUser(uid);
  if (authLoading) return "Loading...";

  return (
    // <DashboardLayout>
    <div className="my-profile">
      <div className="my-profile-container">
        {/* <div className="my-profile-title">My Profile</div> */}
        {/* <ProfilePicture user={user} size="md" /> */}
        <form className="my-profile-form">
          {/* <div className="my-profile-buttons">
            <button className="my-profile-edit-button">Edit</button>
            <button className="my-profile-save-button">Save</button>
          </div> */}

          <div className="my-profile-rows">
            <div className="my-profile-column1">
              <div className="my-profile-row">
                <label className="my-profile-label">First Name</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.fName}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">Last Name</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.lName}
                    readOnly
                  />
                )}
              </div>

              {/* <div className="my-profile-row">
                <label className="my-profile-label">Email</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.email}
                    readOnly
                  />
                )}
              </div> */}

              <div className="my-profile-row">
                <label className="my-profile-label">Phone Number</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.phoneNr}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">Country</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.country}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">City</label>
                {authUser && (
                  <input
                    className="my-profile-input"
                    value={authUser.city}
                    readOnly
                  />
                )}
              </div>
            </div>

            <div className="my-profile-column2">
              {/* <ProfilePicture user={authUser.id} size="md" /> */}
              {/* <div className="my-profile-row">
                <label className="my-profile-label">Domain of expertise</label>
                <select className="my-profile-select"></select>
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">Skills</label>
                <select className="my-profile-select"></select>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
    // </DashboardLayout>
  );
}
