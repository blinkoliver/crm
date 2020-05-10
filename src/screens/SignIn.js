import React from "react";
import SignInForm from "../components/SignInForm";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="FirstBlock">
        <SignInForm />
      </div>
    </div>
  );
};
export default SignIn;
