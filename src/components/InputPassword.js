import React, { useState } from "react";

const InputPassword = (props) => {
  const [inputValue, setInputValue] = useState();
  const [validation, setValidation] = useState();

  const isLowerCase = (str) => {
    return str !== str.toUpperCase();
  };
  const isUpperCase = (str) => {
    return str !== str.toLowerCase();
  };

  const handleInput = (event) => {
    let newValue = event.target.value;

    if (newValue.length < 9) {
      setValidation("menshe 9");
    } else {
      setValidation("");
    }
    if (isLowerCase(newValue) === false) {
      setValidation("net propisnih");
    } else {
      setValidation("");
    }
    if (isUpperCase(newValue) === false) {
      setValidation("net zaglavnih");
    } else {
      setValidation("");
    }
    if (newValue.search(/\d/) === -1) {
      setValidation("net cifr");
    } else {
      setValidation("");
    }
    setInputValue(newValue);
  };

  return (
    <>
      <input
        type="password"
        value={inputValue}
        required
        maxLength="16"
        placeholder="Пароль"
        onChange={(event) => handleInput(event)}
      />
      <p>{validation}</p>
    </>
  );
};
export default InputPassword;
