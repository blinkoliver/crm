import React from "react";
import { useState } from "react";
import Select from "react-select";
import RegistrationFormIP from "../components/RegistrationFormIP";
import RegistrationFormUL from "../components/RegistrationFormUL";
import { ownership } from "../constants/registration";
import "./Registration.scss";

const Registration = () => {
  const [selectedValue, setSelectedValue] = useState({});
  const handleChange = (selectValue) => {
    setSelectedValue(selectValue);
  };
  // console.log(selectedValue);

  return (
    <div className="registration">
      <div className="first-block">
        <Select
          placeholder={"Выберите форму деятельности"}
          onChange={handleChange}
          options={ownership}
          components={{ IndicatorSeparator: () => null }}
          styles={{
            valueContainer: () => ({
              height: "10vh",
              paddingLeft: "2vh",
            }),
            placeholder: () => ({
              fontSize: "3vh",
              marginTop: "6%",
              color: "gray",
            }),
            singleValue: () => ({
              color: "gray",
              fontSize: "3vh",
              marginTop: "3vh",
            }),
          }}
        />
      </div>
      <div className="second-block">
        {(selectedValue.value === "Индивидуальный предприниматель" && (
          <RegistrationFormIP />
        )) ||
          (selectedValue.value === "Юридическое лицо" && (
            <RegistrationFormUL />
          ))}
      </div>
    </div>
  );
};
export default Registration;
