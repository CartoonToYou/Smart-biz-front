import React from "react";
import { getToken } from "../utils/Session";
import { login, home } from "../App";

const Error404PageNotFound = ({ history }) => {
  const redirectToHomePage = () => {
    if (getToken()) {
      history.replace(home);
    } else {
      history.replace(login);
    }
  };

  return (
    <h1>
      404 PageNotFound
      <br />
      <button onClick={redirectToHomePage}>Back</button>
    </h1>
  );
};

export default Error404PageNotFound;
