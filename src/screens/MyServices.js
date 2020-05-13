import React from "react";
import Service from "../components/Service";
import { services } from "../constants/services";
import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="my-services">
      <div className="add-and-sort">
        <div className="add">
          <button className="my-services-button">Добавить услугу</button>
        </div>
        <div className="sort">
          Сортировать
          <select>
            <option>По названию услуги</option>
            <option>По дате</option>
            <option>По цене</option>
            <option>По статусу</option>
          </select>
        </div>
      </div>
      <div className="table-header">
        <p>Дата</p>
        <p>Наименование</p>
        <p>Сумма по акту</p>
        <p>Статус</p>
        <p>{"    "}</p>
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
