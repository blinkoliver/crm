import React from "react";

const Input = ({ onChange, onBlur, onFocus, placeholder }) => (
  <input
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder={placeholder}
  />
);

export default Input;