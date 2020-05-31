import React from "react";
import { useHistory } from "react-router-dom";

const MyStaff = (props) => {
  let history = useHistory();

  localStorage.setItem("access_token", "");

  if (localStorage.getItem("access_token").length > 10) {
    console.log("rabotaet");
  } else {
    history.push("/signIn");
  }

  return (
    <>
      <button type="button">Go home</button>
    </>
  );
};
export default MyStaff;
