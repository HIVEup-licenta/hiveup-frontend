import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./MyProfileStyle.css";

export default function MyProfile() {
  return (
    <DashboardLayout>
      <div className="my-profile">
        <div className="my-profile-container">
          <div className="my-profile-title">My Profile</div>
          <form className="my-profile-form">
            <div className="my-profile-buttons">
              <button className="my-profile-edit-button">Edit</button>
              <button className="my-profile-save-button">Save</button>
            </div>

            <div className="my-profile-rows">
              <div className="my-profile-column1">
                <div className="my-profile-row">
                  <label className="my-profile-label">First Name</label>
                  <input className="my-profile-input"></input>
                </div>

                <div className="my-profile-row">
                  <label className="my-profile-label">Last Name</label>
                  <input className="my-profile-input"></input>
                </div>

                <div className="my-profile-row">
                  <label className="my-profile-label">Email</label>
                  <input className="my-profile-input"></input>
                </div>

                <div className="my-profile-row">
                  <label className="my-profile-label">Phone Number</label>
                  <input className="my-profile-input"></input>
                </div>
              </div>

              <div className="my-profile-column2">
              <div className="my-profile-row">
                  <label className="my-profile-label">
                    Domain of expertise
                  </label>
                  <select className="my-profile-select"></select>
                </div>

              <div className="my-profile-row">
                  <label className="my-profile-label">Skills</label>
                  <select className="my-profile-select"></select>
                </div>

                <div className="my-profile-row">
                  <label className="my-profile-label">Country</label>
                  <input className="my-profile-input"></input>
                </div>

                <div className="my-profile-row">
                  <label className="my-profile-label">City</label>
                  <input className="my-profile-input"></input>
                </div>

               
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
