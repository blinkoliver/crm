import React from "react";
import Select from "react-select";
import Input from "../components/Input";
import selectedOption from "../components/Dropdown";
import {
  ownership,
  ownershipForm,
  fieldForIndividualEntrepreneur,
  fieldForLegalEntity,
} from "../constants/registration";
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
          <Select
            onChange={this.handleChange}
            options={ownership}
            value={selectedOption}
          />
        </div>
        <div className="SecondBlock">
          {this.state.selectedOption === 1 ? (
            <div className="IndividualEntrepreneur">
              {fieldForIndividualEntrepreneur.map((element) => (
                <Input placeholder={element.placeholder} />
              ))}
            </div>
          ) : (
            <div className="LegalEntity">
              <Select options={ownershipForm} />
              {fieldForLegalEntity.map((element) => (
                <Input placeholder={element.placeholder} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Registration;
