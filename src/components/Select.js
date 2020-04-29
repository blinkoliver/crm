import React from "react";

const Select = ({ onChange, options }) => (
  <select onChange={onChange}>
    {options.map((element) => (
      <option key={element.value}>{element.label}</option>
    ))}
  </select>
);

export default Select;
