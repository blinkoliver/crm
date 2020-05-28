import React from "react";
import "./Service.scss";

const Client = (props) => {
  return (
    <div className="service-card">
      <div className="date">{props.date}</div>
      <div className="task-name">{props.taskName}</div>
      <div className="price">{props.price}</div>
      <div className="status">{props.status}</div>
      <div>
        <div>изменить</div>
        <div>удалить</div>
        <div>подробнее</div>
      </div>
    </div>
  );
};

export default Client;
