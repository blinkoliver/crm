import React from "react";
import Service from "../components/Service";
import { services } from "../constants/services";
import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="MyServices">
      <div className="AddAndSort">
        <div className="Add">
          <button>Добавить услугу</button>
        </div>
        <div className="Sort">
          Сортировать
          <select>
            <option>По названию услуги</option>
            <option>По заказчику</option>
            <option>По исполнителю</option>
            <option>По статусу</option>
            <option>По цене</option>
          </select>
        </div>
      </div>
      {services.map((element) => (
          <Service
            taskName={element.taskName}
            status={element.status}
            executor={element.executor}
            price={element.price}
            customer={element.customer}
          />
      ))}
    </div>
  );
};

export default MyServices;
