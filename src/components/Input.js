import React from "react";

// const Input = props => (
//   <input
//     id={"focus"}
//     onChange={props.onChange}
//     onBlur={props.onBlur}
//     onFocus={props.onFocus}
//     placeholder={"  Find Movies..."}
//   />
// );

const Input = ({ onChange, onBlur, onFocus, placeholder }) => (
  <input
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder={placeholder}
  />
);

export default Input;