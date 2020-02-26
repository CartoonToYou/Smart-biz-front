import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/Session";
import { login } from "../App";

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? <Component {...props} /> : <Redirect to={login} />
      }
    />
  );
};

export default PrivateRoute;
