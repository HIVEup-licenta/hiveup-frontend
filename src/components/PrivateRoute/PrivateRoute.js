import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { APP_LOGIN_URL } from "../../pages/shared/constants";
import React from 'react';

export default function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return user !== null ? children : <Navigate to={APP_LOGIN_URL} />;
      }}
    />
  );
}
