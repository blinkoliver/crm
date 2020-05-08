import React from "react";

const Service = (props) => {
  return (
    <div className="ServiceCard">
      <div className="ServiceCard-Header">
        <div>Название:{props.taskName}</div>
        <div>Статус:{props.status}</div>
        <div>Цена:{props.price}</div>
        <div>Исполнитель:{props.executor}</div>
        <div>Заказчик:{props.customer}</div>
      </div>
    </div>
  );
};

export default Service;
