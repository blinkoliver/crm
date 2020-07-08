  
import React from "react";
import "../screens/App.scss";

function Loading() {
  return (
    <div className={"Container"}>
      <div className={"Loader"}>
        <h1>Fetching Data</h1>
      </div>
    </div>
  );
}

export default Loading;