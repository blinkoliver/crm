import React from "react";
import Input from "../components/Input"

class SignIn extends React.Component {
  state = {
    inputValue: "",
    selectedValue: "",
  };

  render() {
    return (
      <div>
        <Input
          onChange={(event) => this.handleInput(event)}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}
export default SignIn;
