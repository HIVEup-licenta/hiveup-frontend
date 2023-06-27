import { useState } from "react";
import { Link } from "react-router-dom";
import { APP_MYFEED_URL, APP_LOGIN_URL } from "../shared/constants";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../firebaseFunctions/auth";
import "./RegisterStyle.css";
import { Button } from "@chakra-ui/react";

export const emailValidate = {
  required: {
    value: true,
    message: "Please enter an email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "Please enter password",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
};

export const fNameValidate = {
  required: {
    value: true,
    message: "Please enter your first name",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "First name is not valid",
  },
};

export const lNameValidate = {
  required: {
    value: true,
    message: "Please enter your last name",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "Last name is not valid",
  },
};

export const countryValidate = {
  required: {
    value: true,
    message: "Please enter your last name",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "Last name is not valid",
  },
};

export const cityValidate = {
  required: {
    value: true,
    message: "Please enter your last name",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "Last name is not valid",
  },
};

export const phoneNrValidate = {
  required: {
    value: true,
    message: "Please enter your first name",
  },
  pattern: {
    value:
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    message: "First name is not valid",
  },
};

export default function Register() {
  const { register: signup, isloading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    console.log(data);
    signup({
      email: data.email,
      fName: data.fName,
      lName: data.lName,
      phoneNr: data.phoneNr,
      country: data.country,
      city: data.city,
      password: data.password,
      redirectTo: APP_MYFEED_URL,
    });
  }

  return (
    <div className="register-bkgWrapper">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
          <div className="register-rows">
            <div className="register-column">
              <div className="register-fieldWrapper">
                <label className="register-label">First Name *</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Enter first name"
                  {...register("fName", fNameValidate)}
                />
              </div>
              <div className="register-fieldWrapper">
                <label className="register-label">Last Name *</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Enter last name"
                  {...register("lName", lNameValidate)}
                />
              </div>
              <div className="register-fieldWrapper">
                <label className="register-label">Password *</label>
                <input
                  type="password"
                  className="register-input"
                  placeholder="Enter password"
                  {...register("password", passwordValidate)}
                />
              </div>
            </div>

            <div className="register-column">
              <div className="register-fieldWrapper">
                <label className="register-label">Phone number *</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Enter phone number"
                  {...register("phoneNr", phoneNrValidate)}
                />
              </div>
              <div className="register-fieldWrapper">
                <label className="register-label">Country *</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Enter country"
                  {...register("country", countryValidate)}
                />
              </div>
              <div className="register-fieldWrapper">
                <label className="register-label">City *</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Enter city"
                  {...register("city", cityValidate)}
                />
              </div>
            </div>
          </div>

          <div className="password-register">
            <div className="password-field">
              {/* <label className="register-label-password">Password *</label>
              <input
                type="password"
                className="register-input-password"
                placeholder="Enter password"
                {...register("password", passwordValidate)}
              /> */}
              <label className="register-label-email">Email *</label>
                <input
                  type="email"
                  className="register-input-email"
                  placeholder="Enter email"
                  {...register("email", emailValidate)}
                />

            </div>
          </div>

          <div className="buttons">
            <button
              type="submit"
              className="register-signup-btn"
              isloading={isloading}
              loadingText="Signing Up"
            >
              Submit
            </button>

            <span className="login-register">
              <span className="login-register-text">
                Already have an account?{" "}
              </span>
              <Link as={Link} to={APP_LOGIN_URL} className="login-register-btn">
                <span className="login-register-text">Login</span>
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
