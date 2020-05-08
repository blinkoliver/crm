import React from "react";
import Service from "../components/Service";
import "./App.css";
import { services } from "../constants/services";

const MyServices = () => {
  return (
    <div>
      <button>Добавить услугу</button>
      Сортировать
      <select>
        <option>По названию услуги</option>
        <option>По заказчику</option>
        <option>По исполнителю</option>
        <option>По статусу</option>
        <option>По цене</option>
      </select>
      {services.map((element) => (
        <p>
          <Service
            taskName={element.taskName}
            status={element.status}
            executor={element.executor}
            price={element.price}
            customer={element.customer}
          />
        </p>
      ))}
    </div>
  );
};

export default MyServices;
