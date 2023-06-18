import { useState } from "react";
import { Link } from "react-router-dom";
import { APP_MYFEED_URL, APP_LOGIN_URL } from "../shared/constants";
import * as React from "react";
import { useForm } from "react-hook-form";
// import { register } from "../shared/register";
// import { Link as RouterLink } from "react-router-dom";
import { useRegister } from "../../firebaseFunctions/auth";
import "./RegisterStyle.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "@chakra-ui/react";
// import {doesEmailExists} from "../../firebaseFunctions/validators";

// const getRegisterSchema = () =>
//   Yup.object().shape({
//     firstName: Yup.string()
//       .min(3, "Cel putin 3 caractere")
//       .max(25, "Cel mult 25 de caractere")
//       .matches(
//         /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
//         "Cel putin un caracter alfanumeric"
//       )
//       .required("Required"),
//     lastName: Yup.string()
//       .min(3, "Cel putin 3 caractere")
//       .max(25, "Cel mult 25 de caractere")
//       .matches(
//         /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
//         "Cel putin un caracter alfanumeric"
//       )
//       .required("Required"),
//     email: Yup.string()
//       .email("Email invalid")
//       .max(50, "Cel mult 50 de caractere")
//       .required("Required"),
//     phoneNrUser: Yup.string()
//       .min(10, "Cel putin 10 caractere")
//       .max(10, "Cel mult 10 de caractere")
//       .matches(/^[0-9]*$/, "Cel putin un caracter numeric")
//       .required("Required"),
//     countryUser: Yup.string()
//       .min(3, "Cel putin 3 caractere")
//       .max(25, "Cel mult 25 de caractere")
//       .matches(
//         /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
//         "Cel putin un caracter alfanumeric"
//       )
//       .required("Required"),
//     cityUser: Yup.string()
//       .min(3, "Cel putin 3 caractere")
//       .max(25, "Cel mult 25 de caractere")
//       .matches(
//         /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
//         "Cel putin un caracter alfanumeric"
//       )
//       .required("Required"),
//     // skill: Yup.string().required("Required"),
//     // domain: Yup.string().required("Required"),
//     password: Yup.string().required("Required"),
//   });

// const PUBLIC_SPEAKING = "PUBLIC_SPEAKING";
// const SOCIAL_INVOLVED = "SOCIAL_INVOLVED";
// const HELP_THE_COMUNITY = "HELP_THE_COMUNITY";
// const CREATIVITY = "CREATIVITY";
// const PROGRAMMING = "PROGRAMMING";
// const MARKETING = "MARKETING";
// const SOCIAL = "SOCIAL";
// const LOCAL_COMUNITY = "LOCAL_COMUNITY";
// const ARTS = "ARTS";
// const IT = "IT";
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
        {/* <form className="register-form" onSubmit={handleSubmit}> */}
        <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
         
          <div className="register-rows">
            <div className="register-column">
              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">First Name</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="First name"
                  {...register("fName", fNameValidate)}
                  // onChange={(e) => setFname(e.target.value)}
                />
                {/* </FormControl> */}
              </div>
              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">Last Name</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Last name"
                  {...register("lName", lNameValidate)}
                  // onChange={(e) => setLname(e.target.value)}
                />
                {/* </FormControl> */}
              </div>
              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">Email</label>
                <input
                  type="email"
                  className="register-input"
                  placeholder="Enter email"
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email", emailValidate)}
                />
                {/* </FormControl> */}
              </div>
            </div>

            <div className="register-column">
              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">Phone number</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Phone number"
                  // onChange={(e) => setPhoneNr(e.target.value)}
                  {...register("phoneNr", phoneNrValidate)}
                />
                {/* </FormControl> */}
              </div>

              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">Country</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Country"
                  // onChange={(e) => setCountry(e.target.value)}
                  {...register("country", countryValidate)}
                />
                {/* </FormControl> */}
              </div>
              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">City</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="City"
                  // onChange={(e) => setCity(e.target.value)}
                  {...register("city", cityValidate)}
                />
                {/* </FormControl> */}
              </div>
            </div>
            <div className="register-column">
              {/* <div className="register-fieldWrapper">
                <label className="register-label">Skills needed</label>
                <select
                  className="register-input"
                  value={skills_needed}
                  onChange={handleSkillChange}
                  placeholder="Select your skill"
                >
                  <option value="">Select a skill</option>
                  <option value={PUBLIC_SPEAKING}>PUBLIC SPEAKING</option>
                  <option value={SOCIAL_INVOLVED}>SOCIAL INVOLVED</option>
                  <option value={HELP_THE_COMUNITY}>HELP THE COMUNITY</option>
                  <option value={CREATIVITY}>CREATIVITY</option>
                  <option value={PROGRAMMING}>PROGRAMMING</option>
                  <option value={MARKETING}>MARKETING</option>
                </select>
              </div> */}
              {/* 
              <div className="register-fieldWrapper">
                <label className="register-label">Domain</label>
                <select
                  className="register-input"
                  value={domain}
                  onChange={handleDomainChange}
                  placeholder="Select your domain"
                >
                  <option value="">Select a domain</option>
                  <option value={SOCIAL}>SOCIAL</option>
                  <option value={LOCAL_COMUNITY}>LOCAL COMUNITY</option>
                  <option value={ARTS}>ARTS</option>
                  <option value={IT}>IT</option>
                  <option value={MARKETING}>MARKETING</option>
                </select>
              </div> */}

              <div className="register-fieldWrapper">
                {/* <FormControl> */}
                <label className="register-label">Password</label>
                <input
                  type="password"
                  className="register-input"
                  placeholder="Enter password"
                  // onChange={(e) => setPassword(e.target.value)}
                  {...register("password", passwordValidate)}
                />
                {/* </FormControl> */}
              </div>
            </div>
          </div>

          <div className="buttons">
            {/* <button className="login-register-btn">
              <Link to={APP_LOGIN_URL} className="register-link">
                Go to Login
              </Link>
            </button> */}
            {/* <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p> */}
            {/* <Button
              type="submit"
              className="register-signup-btn"
              colorScheme="teal"
              isloading={isloading}
              loadingText="Signing Up"
            >
              Submit
            </Button> */}
            
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
              <Link
                as={Link}
                to={APP_LOGIN_URL}
                className="login-register-btn"
              >
                <span className="login-register-text">Login</span>
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default Register;
