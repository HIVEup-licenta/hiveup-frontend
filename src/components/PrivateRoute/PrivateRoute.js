import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { APP_LOGIN_URL } from "../constants";

export default function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return user !== null ? children : <Redirect to={APP_LOGIN_URL} />;
      }}
    />
  );
}
