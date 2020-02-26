import React, { Component } from "react";
import { home } from "../App";
import { login } from "../services/Auth";
import { TextField, Button } from "@material-ui/core";

import Alert from "../components/Alert";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    isOpen: false
  };

  loginToAuthentication = async e => {
    const { username, password } = this.state;
    const { history } = this.props;
    e.preventDefault();
    const statusLogin = await login(username, password);
    if (statusLogin) {
      history.replace(home);
    } else {
      this.setState({ isOpen: true });
    }
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCloseAlert = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { handleCloseAlert, handleChangeInput, loginToAuthentication } = this;
    const { isOpen, username, password } = this.state;
    return (
      <>
        <TextField
          label="username"
          varaint="filled"
          type="text"
          name="username"
          value={username}
          onChange={handleChangeInput}
        />
        <TextField
          label="password"
          varaint="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
        />
        <div style={{ marginBottom: "16px" }} />
        <Button
          onClick={loginToAuthentication}
          variant="contained"
          color="primary"
          fullWidth
        >
          Log in
        </Button>
        <Alert
          title="การเข้าสู่ระบบล้มเหลว"
          detail="กรุณาตรวจสอบชื่อเข้าใช้งานหรือรหัสผ่านอีกครั้ง!"
          isOpen={isOpen}
          handleClose={handleCloseAlert}
          confirmText="ตกลง"
          handleConfirm={handleCloseAlert}
        />
      </>
    );
  }
}

export default Login;
