import React from "react";
import "./Service.scss"

const Service = (props) => {
  return (
    <div className="service-card">
      <div className="date">{props.date}</div>
      <div className="task-name">{props.taskName}</div>
      <div className="price">{props.price}</div>
      <div className="status">{props.status}</div>
      <div>
        <div>изменить</div>
        <div>удалить</div>
      </div>
    </div>
  );
};

export default Service;
