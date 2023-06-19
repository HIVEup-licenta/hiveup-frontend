import React from "react";
import {
  APP_REGISTER_URL,
  APP_FORGOT_PASSWORD_URL,
  APP_MYFEED_URL,
} from "../shared/constants";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../../firebaseFunctions/auth";
import { useForm } from "react-hook-form";
// import { emailValidate, passwordValidate } from "utils/form-validate";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Login.css";


export const emailValidate = {
  required: {
    value: true,
    // message: "Please enter an email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    // message: "Email address is not valid",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    // message: "Please enter password",
  },
  minLength: {
    value: 6,
    // message: "Password must be at least 6 characters long",
  },
};

export default function Login() {
  const navigate = useNavigate();
  const { login, isloading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    // console.log(data);
    // const succceeded = await login({
    await login({
      email: data.email,
      password: data.password,
      redirectTo: APP_MYFEED_URL,
    });

    // if(succceeded) reset();
  }

  return (
    <div className="login-bkgWrapper">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
          <div className="login-fieldSets">
            <label htmlFor="email-login" className="login-label">
              Email
            </label>
            <input
              id="email-login"
              type="email"
              className="login-input"
              placeholder="Enter email"
              {...register("email", emailValidate)}
            />
          </div>

          <div className="login-fieldSets">
            <label className="login-label" htmlFor="password-login">
              Password
            </label>
            <input
              id="password-login"
              type="password"
              className="login-input"
              placeholder="Enter password"
              {...register("password", passwordValidate)}
            />
          </div>

          {/* <div className="login-fieldSet">
            <input
              type="checkbox"
              className="remember-me-input"
              id="remeber-me-input"
            />
            <label className="remember-me-label" htmlFor="remeber-me-input">
              Remember me
            </label>
          </div> */}

          {/* <div className="login-forgotPasswordContainer">
            <Typography className="login-forgotPassword">
              <Link to={APP_FORGOT_PASSWORD_URL}>Forgot your password?</Link>
            </Typography>
          </div> */}

          <div className="buttons">
            <button
              type="submit"
              className="login-submit-btn"
              isloading={isloading}
              loadingText="Logging In"
            >
              Log In
            </button>

            <span className="login-register">
              <span className="login-register-text">
                Don't have an account?{" "}
              </span>
              <Link
                as={Link}
                to={APP_REGISTER_URL}
                className="login-register-btn"
              >
                <span className="login-register-text">Register</span>
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
