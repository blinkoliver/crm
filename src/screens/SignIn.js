import React from "react";
import "../screens/SignIn.css";
import SignInForm from "../components/SignInForm";

class SignIn extends React.Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <div className="SignIn">
        <div className="FirstBlock">
          <SignInForm />
        </div>
      </div>
    );
  }
}
export default SignIn;
