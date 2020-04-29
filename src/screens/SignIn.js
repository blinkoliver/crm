import React from "react";
import Input from "../components/Input";
import "../screens/SignIn.css";

class SignIn extends React.Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <div className="SignIn">
        <div className="FirstBlock">
        <Input
          onChange={(event) => this.handleInput(event)}
          placeholder={"email"}
        />
        <Input
          onChange={(event) => this.handleInput(event)}
          placeholder={"password"}
        />
        <button>Войти</button>
        </div>
      </div>
    );
  }
}
export default SignIn;
