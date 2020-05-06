import React from "react";

const Service = props => {
  return (
    <div className="ServiceCard">
      <div className="ServiceCard-Header">
  <div>Название:{props.taskName}</div>
  <div>Статус:{props.status}</div>
      </div>
    </div>
  );
};

export default Service;
