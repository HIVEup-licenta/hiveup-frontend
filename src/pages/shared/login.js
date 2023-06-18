// import { USER_STORAGE, getLoginURL, TOKEN_STORAGE } from "./constants.js";

// export const login = async ({ email, password }) => {
//   try {
//     let obj = { email: email, password };

//     console.log(obj, "khkgugufyt")

//     const loginRequestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj),
//       mode: "cors",
//     };

//     const loginResponse = await fetch(getLoginURL(), loginRequestOptions);

//     const token = loginResponse.headers.get("token");

//     localStorage.setItem(TOKEN_STORAGE, token);

//     const getUserDataRequestOptions = {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(obj),
//       // headers: { Authorization: token },
//       mode: "cors",
//     };

//     const getProfileResponse = await fetch(
//       "http://localhost:8000/api/auth/login",
//       getUserDataRequestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data, "PROFIL");
//         localStorage.setItem(USER_STORAGE, JSON.stringify(data));
//       });

//     const user = JSON.parse(localStorage.getItem(USER_STORAGE));

//     return user;
//   } catch (e) {
//     console.error("Error on login: ", e);

//     return {
//       status: e.response.status,
//       message: e.response.data,
//     };
//   }
// };
