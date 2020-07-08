import React, { useState, useEffect } from "react";
import "./Service.scss";

const Service = (props) => {
  const [status, setStatus] = useState();
  useEffect(() => {
    switch (props.status) {
      case 0:
        setStatus("К выполнению");
        break;
      case 1:
        setStatus("В работе");
        break;
      case 2:
        setStatus("Завершён");
        break;
      case 3:
        setStatus("Отменен");
        break;
      default:
        console.log("Нет таких значений");
    }
  }, []);

  return (
    <div className="service-card" onClick={props.onClick}>
      <div className="date">{props.date}</div>
      <div className="task-name">{props.name}</div>
      <div className="price">{props.price} BYN</div>
      <div className="status">{status}</div>
    </div>
  );
};

export default Service;
