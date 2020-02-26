import Api, { loginEndpoint } from "../utils/Api";
import { setSession, clearSession } from "../utils/Session";

export const login = async (username, password) => {
  if (username && password) {
    try {
      const database = process.env.REACT_APP_ODOO_DB;
      const response = await Api(loginEndpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          params: {
            db: database,
            username,
            password
          }
        })
      });
      await setSession(response.result, response.result.access_token);
      if (response.status === 200) {
        const expiredDate = new Date();
        const expiredHours = 2;
        expiredDate.setHours(expiredDate.getHours() + expiredHours);
        localStorage.setItem(
          "expiration_datetime",
          JSON.stringify(expiredDate)
        );
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error && false;
    }
  }
};

export const logout = () => clearSession();
