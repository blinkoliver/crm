import React from "react";
import "./Service.scss"

const Service = (props) => {
  return (
    <div className="service-card">
      <div className="date">Дата:{props.date}</div>
      <div className="task-name">Наименование:{props.taskName}</div>
      <div className="price">Сумма по акту:{props.price}</div>
      <div className="status">Статус:{props.status}</div>
    </div>
  );
};

export default Service;
