import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import { useAuth } from "../../firebaseFunctions/auth";
import { APP_PROTECTED_URL } from "../../pages/shared/constants";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import "./MyProfileStyle.css";
import { useUser } from "../../firebaseFunctions/users";
import { format } from "date-fns";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Stack,
  InputGroup,
  InputLeftElement,
  PhoneIcon,
  Input,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function MyProfile() {
  const { id } = useParams();
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { user, isLoading } = useUser(id);
  if (authLoading) return "Loading...";
  if (isLoading) return "Loading";

  return (
    // <DashboardLayout>
    <div className="my-profile">
      <div className="my-profile-container">
        <form className="my-profile-form">
          <div className="my-profile-rows">
            <div className="my-profile-column1">
              <ProfilePicture size="2xl" user={user} />
              <div className="my-profile-row">
                <label className="my-profile-label">On this app since: </label>
                {user && (
                  <input
                    className="my-profile-input-date"
                    value={format(user.date, "MMMM YYY")}
                    readOnly
                  />
                )}
              </div>
            </div>

            <div className="my-profile-column2">
              <div className="my-profile-row">
                <label className="my-profile-label">First Name</label>
                {user && (
                  <input
                    className="my-profile-input"
                    value={user.fName}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">Last Name</label>
                {user && (
                  <input
                    className="my-profile-input"
                    value={user.lName}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">Phone Number</label>
                {user && (
                  <input
                    className="my-profile-input"
                    value={user.phoneNr}
                    readOnly
                  />
                )}
              </div>
            </div>
            <div className="my-profile-column3">
              <div className="my-profile-row">
                <label className="my-profile-label">Country</label>
                {user && (
                  <input
                    className="my-profile-input"
                    value={user.country}
                    readOnly
                  />
                )}
              </div>

              <div className="my-profile-row">
                <label className="my-profile-label">City</label>
                {user && (
                  <input
                    className="my-profile-input"
                    value={user.city}
                    readOnly
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
