import React from "react";
import { useState } from "react";

const Dropdown = ({options}) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <select
      value={selectedOption}
      onChange={(event) => setSelectedOption(event.target.value)}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
