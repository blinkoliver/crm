import React from "react";
import SignInForm from "../components/SignIn/SignInForm";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in-container">
        <h1 className="sign-in-text">Вход в Твой бизнес</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
