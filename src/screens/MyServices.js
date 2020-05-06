import React from "react";
import Service from "../components/Service";
import "./App.css";
import { services } from "../constants/services";

const MyServices = () => {
  return (
    <div>
      {services.map((element) => (
        <p>
          <Service taskName={element.taskName} status={element.status} />
        </p>
      ))}
    </div>
  );
};

export default MyServices;
