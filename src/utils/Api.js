import fetch from "isomorphic-fetch";
import { getToken } from "./Session";

export const loginEndpoint = "/api/auth/token",
  eventsEndpoint = "/api/calendar/events";

const _checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const Api = async (endpoint, options) => {
  const headers = {
    Accept: "application/json"
  };

  const accessToken = getToken();

  if (accessToken) {
    headers["Authorization"] = accessToken;
    if (options.method.toUpperCase() !== "GET")
      headers["Content-Type"] = "application/json";
  }

  let response = await fetch(endpoint, {
    headers,
    ...options
  });

  response = _checkStatus(response);
  return {
    status: response.status,
    ...(await response.json())
  };
};

export default Api;
