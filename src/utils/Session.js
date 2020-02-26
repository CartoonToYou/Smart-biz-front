export const setSession = (accountData, accessToken) => {
  localStorage.setItem("account_data", JSON.stringify(accountData));
  localStorage.setItem("access_token", JSON.stringify(accessToken));
};

export const getToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken ? JSON.parse(accessToken) : null;
};

export const clearSession = () => {
  localStorage.clear();
};
