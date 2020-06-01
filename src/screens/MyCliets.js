import React from "react";
import AddClientModal from "../components/AddClientModal";
import SortServices from "../components/SortServices";
import "./MyClients.scss";

const MyClients = () => {
  return (
    <div className="my-clients">
      <div className="add-and-sort">
        <div className="add">
          <AddClientModal />
        </div>
        <div className="sort">
          <SortServices />
        </div>
      </div>
      <div className="table-header">
        <p>Форма собственности кллиента</p>
        <p>Наименование</p>
      </div>

      {/* {services.map((element) => (
        <Client
          key={element.taskName}
          date={element.date}
          taskName={element.taskName}
          price={element.price}
          status={element.status}
        />
      ))} */}
    </div>
  );
};
export default MyClients;
