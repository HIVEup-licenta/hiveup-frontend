import React from "react";
import { Routes, Route } from "react-router-dom";
import MyFeed from "./pages/MyFeed/MyFeed";
import History from "./pages/History/History";
import MyProfile from "./pages/MyProfile/MyProfile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  APP_ROOT,
  APP_LOGIN_URL,
  APP_REGISTER_URL,
  APP_FORGOT_PASSWORD_URL,
  APP_PROTECTED_URL,
  APP_MYFEED_URL,
  APP_PROFILE_URL,
  APP_HOSTORY_URL,
} from "./pages/shared/constants";

import "./index.css";

export const router = createBrowserRouter([
  { path: APP_ROOT, element: "Public Root" },
  { path: APP_LOGIN_URL, element: <Login /> },
  { path: APP_REGISTER_URL, element: <Register /> },
  {
    path: APP_PROTECTED_URL,
    element: <DashboardLayout />,
    children: [
      {
        path: APP_MYFEED_URL,
        element: <MyFeed />,
      },
      {
        path: APP_PROFILE_URL,
        element: <MyProfile />,
      },
      {
        path: APP_HOSTORY_URL,
        element: <History />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ChakraProvider>
    <div>
      {/* <Routes> */}
        <RouterProvider router={router} />

        {/* 
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myFeed" element={<MyFeed />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/history" element={<History />} /> */}

      {/* </Routes> */}
    </div>
    </ChakraProvider>
  );
}

// export default App;
