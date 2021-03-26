import React, { useState } from "react";
import "./style.css";
import { LoginForm } from "../../components/login";
import { ForgotPassForm } from "../../components/forgotPassword";

import { Jumbotron } from "react-bootstrap";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }

    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill the login form!");
    }
    console.log(email, password);
  };

  const handleForgotPassSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("fill the forgot password form!");
    }
    console.log(email);
  };

  const formSwitcher = (type) => {
    setFormLoad(type);
    console.log(type);
  };

  return (
    <div className={"entry-page bg-info"}>
      <Jumbotron className={"form-box"}>
        {formLoad === "login" ? (
          <LoginForm
            handleOnchange={handleOnchange}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        ) : (
          <ForgotPassForm
            handleOnchange={handleOnchange}
            handleSubmit={handleForgotPassSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};
