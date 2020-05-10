import React from "react";
import "./Service.scss"

const Service = (props) => {
  return (
    <div className="ServiceCard">
      <div className="TaskName">Название:{props.taskName}</div>
      <div className="Status">Статус:{props.status}</div>
      <div className="Price">Цена:{props.price}</div>
      <div className="Executor">Исполнитель:{props.executor}</div>
      <div className="Customer">Заказчик:{props.customer}</div>
    </div>
  );
};

export default Service;
