import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "../shared/login.js";
import {
  APP_REGISTER_URL,
  APP_FORGOT_PASSWORD_URL,
  TOKEN_STORAGE,
  APP_ADMIN_HOME_URL,
} from "../shared/constants";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
// import Button from "@mui/material/Button";
import "./Login.css";

const getSchema = () =>
  Yup.object().shape({
    email: Yup.string()
    .email("Email invalid")
    .max(50, "Cel mult 50 de caractere")
    .required("Required"),
    password: Yup.string().required("Required").min(3, "Cel putin 3 caractere"),
  });

export default function Login({ setUser, user }) {
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);

   console.log(this.props.values);

    console.log("submit form");
    setError(null);

    try {
      const response = await login({ ...values });

      if (response.status === 400) {
        setError("Error");
      } else {
        setUser(response);
      }
    } catch (e) {
      console.error("Error on login: ", e);
    } finally {
      // setSubmitting(false);
    }
  };

  // if (user !== null) {
  //   let redirectTarget;

  //   // if (user.role === "ADMIN") {
  //   //   redirectTarget = APP_ADMIN_HOME_URL;
  //   // } 
  //   redirectTarget = APP_ADMIN_HOME_URL;
  //   return <Navigate to={redirectTarget} replace={true}/>;
  // }

  return (
    <div className="login-bkgWrapper">
      <br></br>
      <br></br>
      <br></br>
      <div className="login-container">
        <h1 className="login-title">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={getSchema()}
          onSubmit={onSubmit}
        >
          {({ submitForm, isSubmitting}) => (
            <Form className="login-form">
              <div className="login-fieldSet" id="usernameWrapper">
                <InputLabel className="login-label">
                  Email
                </InputLabel>

                <Field className="login-input" name="email" />
              </div>

              <div className="login-fieldSet" id="passwordWrapper">
                <InputLabel className="login-label">
                  Password
                </InputLabel>

                <Field
                  className="login-input"
                  name="password"
                  type="password"
                />
              </div>

              {/* {error ? (
                <ErrorMessage className="error">
                  {error}
                </ErrorMessage>
              ) : null} */}

              <div className="login-forgotPasswordContainer">
                <Typography className="login-forgotPassword">
                  <Link to={APP_FORGOT_PASSWORD_URL}>
                    Forgot your password?
                  </Link>
                </Typography>
              </div>

              <div className="buttons">
                <button
                  fullWidth={true}
                  variant="outlined"
                  className="loginContainer"
                >
                  <Link to={APP_REGISTER_URL}>Register</Link>
                </button>

                <button
                  className="submitButton"
                  fullWidth={true}
                  type="submit"
                  variant="outlined"
                  onClick={onSubmit}
                >
                  {isSubmitting ? "Loading" : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
