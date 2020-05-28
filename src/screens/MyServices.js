import React from "react";
import Service from "../components/Service";
import AddServiceModal from "../components/AddServiceModal";
import SortServices from "../components/SortServices";
import { services } from "../constants/services";
import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="my-services">
      <div className="add-and-sort">
        <div className="add">
          <AddServiceModal />
        </div>
        <div className="sort">
          <SortServices />
        </div>
      </div>
      <div className="table-header">
        <p>Дата</p>
        <p>Наименование</p>
        <p>Сумма по акту</p>
        <p>Статус</p>
        <p>Действие</p>
      </div>

      {services.map((element) => (
        <Service
          key={element.taskName}
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
