import React from "react";
import Select from "react-select";
import RegistrationFormIP from "../components/RegistrationFormIP";
import RegistrationFormUL from "../components/RegistrationFormUL";
import { ownership } from "../constants/registration";
import "../screens/Registration.css";

class Registration extends React.Component {
  state = {
    selectedOption: "",
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.value });
  };

  render() {
    console.log(this.state.selectedOption);
    return (
      <div className="Registration">
        <div className="FirstBlock">
          <Select onChange={this.handleChange} options={ownership} />
        </div>
        <div className="SecondBlock">
          {this.state.selectedOption === 1 ? (
            <RegistrationFormIP />
          ) : (
            <RegistrationFormUL />
          )}
        </div>
      </div>
    );
  }
}
export default Registration;
