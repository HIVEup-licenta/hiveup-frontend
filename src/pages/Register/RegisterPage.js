import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { APP_LOGIN_URL } from "../shared/constants";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import { register } from "../shared/register";
import "./RegisterStyle.css";

const getRegisterSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Cel putin 3 caractere")
      .max(25, "Cel mult 25 de caractere")
      .matches(
        /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
        "Cel putin un caracter alfanumeric"
      )
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Cel putin 3 caractere")
      .max(25, "Cel mult 25 de caractere")
      .matches(
        /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
        "Cel putin un caracter alfanumeric"
      )
      .required("Required"),
    email: Yup.string()
      .email("Email invalid")
      .max(50, "Cel mult 50 de caractere")
      .required("Required"),
    phoneNrUser: Yup.string()
      .min(10, "Cel putin 10 caractere")
      .max(10, "Cel mult 10 de caractere")
      .matches(/^[0-9]*$/, "Cel putin un caracter numeric")
      .required("Required"),
    countryUser: Yup.string()
      .min(3, "Cel putin 3 caractere")
      .max(25, "Cel mult 25 de caractere")
      .matches(
        /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
        "Cel putin un caracter alfanumeric"
      )
      .required("Required"),
    cityUser: Yup.string()
      .min(3, "Cel putin 3 caractere")
      .max(25, "Cel mult 25 de caractere")
      .matches(
        /^[-a-zA-Z0-9_]+(\s+[-a-zA-Z0-9_]+)*$/,
        "Cel putin un caracter alfanumeric"
      )
      .required("Required"),
    // skill: Yup.string().required("Required"),
    // domain: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  export default function RegisterPage() {
  const [errors, setErrors] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  // const [skill, setSkill] = React.useState("");
  // const [domain, setDomain] = React.useState("");

  // const handleSkillChange = (event) => {
  //   setSkill(event.target.value);
  // };

  // const handleDomainChange = (event) => {
  //   setDomain(event.target.value);
  // };

  const onSubmit = async (values, { setSubmitting }) => {
    setErrors([]);

    try {
      const response = await register({ ...values });

      if (response) {
        if (response.status !== 200) {
          setErrors(response.data);
        } else {
          setIsRegistered(true);
        }
      }
    } catch (e) {
      console.error("Error on register: ", e);
    } finally {
      setSubmitting(false);
    }
    console.log("submit register");
  };

  if (isRegistered) {
    const redirectTarget = APP_LOGIN_URL;

    return <Navigate to={redirectTarget} />;
  }

  return (
    <div className="register-bkgWrapper">
      <br></br>
      <br></br>
      <br></br>
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNrUser: "",
            countryUser: "",
            cityUser: "",
            // domain: "",
            // skill: "",
            password: "",
          }}
          validationSchema={getRegisterSchema()}
          onSubmit={onSubmit}
        >
          {({ submitForm, isSubmitting, dirty, isValid }) => (
            <Form className="register-form">
              <div className="register-fieldWrapper">
                <Typography className="register-label">First Name</Typography>
                <TextField name="firstName" className="register-input" />
              </div>
              <div className="register-fieldWrapper">
                <Typography className="register-label">Last Name</Typography>
                <TextField name="lastName" className="register-input" />
              </div>
              <div className="register-fieldWrapper">
                <Typography className="register-label">Email</Typography>
                <TextField
                  type="email"
                  name="email"
                  className="register-input"
                />
              </div>
              <div className="register-fieldWrapper">
                <Typography className="register-label">Phone number</Typography>
                <TextField name="phoneNrUser" className="register-input" />
              </div>
              <div className="register-fieldWrapper">
                <Typography className="register-label">Country</Typography>
                <TextField name="countryUser" className="register-input" />
              </div>
              <div className="register-fieldWrapper">
                <Typography className="register-label">City</Typography>
                <TextField name="cityUser" className="register-input" />
              </div>
              {/* <div className="register-fieldWrapper">
                <InputLabel
                  id="register-label-skill"
                  className="register-label"
                >
                  Skills needed
                </InputLabel>
                <Select
                  labelId="register-label-skill"
                  id="skill-select"
                  value={skill}
                  label="Skills needed"
                  onChange={handleSkillChange}
                >
                  <MenuItem value={PUBLIC_SPEAKING}>PUBLIC SPEAKING</MenuItem>
                  <MenuItem value={SOCIAL_INVOLVED}>SOCIAL INVOLVED</MenuItem>
                  <MenuItem value={HELP_THE_COMUNITY}>
                    HELP THE COMUNITY
                  </MenuItem>
                  <MenuItem value={CREATIVITY}>CREATIVITY</MenuItem>
                  <MenuItem value={PROGRAMMING}>PROGRAMMING</MenuItem>
                  <MenuItem value={MARKETING}>MARKETING</MenuItem>
                </Select>
              </div>
              <div className="register-fieldWrapper">
                <InputLabel
                  id="register-label-domain"
                  className="register-label"
                >
                  Domain
                </InputLabel>
                <Select
                  labelId="register-label-domain"
                  id="domain"
                  value={domain}
                  label="Domain"
                  onChange={handleDomainChange}
                >
                  <MenuItem value={SOCIAL}>SOCIAL</MenuItem>
                  <MenuItem value={LOCAL_COMUNITY}>LOCAL COMUNITY</MenuItem>
                  <MenuItem value={ARTS}>ARTS</MenuItem>
                  <MenuItem value={IT}>IT</MenuItem>
                  <MenuItem value={MARKETING}>MARKETING</MenuItem>
                </Select>
              </div> */}
              <div className="register-fieldWrapper">
                <Typography className="register-label">Password</Typography>
                <TextField
                  name="password"
                  type="password"
                  className="register-input"
                />
              </div>

              {/* {errors && (
                <div className="error">
                  {errors.map((error) => (
                    <Typography>{error.description}</Typography>
                  ))}
                </div>
              )} */}

              <div className="buttons">
                <Button
                  fullWidth={true}
                  variant="outlined"
                  className="registerContainer"
                >
                  <Link to={APP_LOGIN_URL}>Go to Login</Link>
                </Button>
                <Button
                  className="submitButton"
                  disabled={isSubmitting || !dirty || !isValid}
                  onClick={submitForm}
                  fullWidth
                  // variant="outlined"
                >
                  {isSubmitting ? "Loading" : "Register"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// export default Register;
