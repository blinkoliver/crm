import React from "react";
import { useState } from "react";
import Select from "react-select";
import RegistrationFormIP from "../components/RegistrationFormIP";
import RegistrationFormUL from "../components/RegistrationFormUL";
import { ownership } from "../constants/registration";
import "../screens/Registration.css";

const Registration = () => {
  const [selectedValue, setSelectedValue] = useState({});
  const handleChange = (selectValue) => {
    setSelectedValue(selectValue);
  };

  return (
    <div className="Registration">
      <div className="FirstBlock">
        <Select
          placeholder={"Форма деятельности"}
          onChange={handleChange}
          options={ownership}
          components={{ IndicatorSeparator: () => null }}
          styles={{
            valueContainer: () => ({
              height: "10vh",
              paddingLeft: "2vh",
            }),
          }}
        />
      </div>
      <div className="SecondBlock">
        {selectedValue.value === "Индивидуальный предприниматель" ? (
          <RegistrationFormIP />
        ) : (
          <RegistrationFormUL />
        )}
      </div>
    </div>
  );
};
export default Registration;
