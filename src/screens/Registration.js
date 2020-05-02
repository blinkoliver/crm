import React from "react";
import Select from "react-select";
import RegistrationFormIP from "../components/RegistrationFormIP";
import RegistrationFormUL from "../components/RegistrationFormUL";
import { ownership } from "../constants/registration";
import "../screens/Registration.css";

const customStyles = {
  valueContainer: () => ({
    height: "10vh",
    paddingLeft: "2vh",
  }),
};

class Registration extends React.Component {
  state = {
    selectedOwnership: "",
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOwnership: selectedOption.value });
  };

  render() {
    console.log(this.state.selectedOwnership);
    return (
      <div className="Registration">
        <div className="FirstBlock">
          <Select
            placeholder={"Форма деятельности"}
            onChange={this.handleChange}
            options={ownership}
            components={{ IndicatorSeparator: () => null }}
            styles={customStyles}
          />
        </div>
        <div className="SecondBlock">
          {this.state.selectedOwnership === "Индивидуальный предприниматель" ? (
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
