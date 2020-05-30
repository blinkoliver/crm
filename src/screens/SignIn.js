import React from "react";
import SignInForm from "../components/SignInForm";
import "./SignIn.scss";
import { BrowserRouter as Route, NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in-container">
        <h1 className="sign-in-text">Вход в Твой бизнес</h1>
        <SignInForm />
        <NavLink className="registration-link" to={"/registration"}>
          Регистрация
        </NavLink>
        <Route path={"/registration"} />
      </div>
    </div>
  );
};

export default SignIn;
