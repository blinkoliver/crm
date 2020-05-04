import React from "react";
import "../screens/SignIn.css";
import SignInForm from "../components/SignInForm";

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
