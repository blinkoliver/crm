import React from "react";
import Service from "../components/Service";
import { services } from "../constants/services";
import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="my-services">
      <div className="add-and-sort">
        <div className="add">
          <button>Добавить услугу</button>
        </div>
        <div className="sort">
          Сортировать
          <select>
            <option>По названию услуги</option>
            <option>По дате</option>
            <option>По заказчику</option>
            <option>По исполнителю</option>
            <option>По статусу</option>
            <option>По цене</option>
          </select>
        </div>
      </div>
      {services.map((element) => (
        <Service
          date={element.date}
          taskName={element.taskName}
          price={element.price}
          status={element.status}
        />
      ))}
    </div>
  );
};

export default MyServices;
