import { getRegisterURL } from "./constants.js";

export const register = async (values) => {
  try {
    let obj = {
      password: values["password"],
      firstName: values["firstName"],
      lastName: values["lastName"],
      email: values["email"],
      phoneNrUser: values["phoneNrUser"],
      countryUser: values["countryUser"],
      cityUser: values["cityUser"],
    };

    const registerRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
      mode: "cors",
    };

    const registerResponse = await fetch(
      getRegisterURL(),
      registerRequestOptions
    );

    return registerResponse;
  } catch (e) {
    console.error("Error on login: ", e);

    return {
      status: e.response.status,
      message: e.response.data,
    };
  }
};
