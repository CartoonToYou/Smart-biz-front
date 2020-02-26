import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/Session";
import { home } from "../App";

const PublicRoute = props => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? <Redirect to={home} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
