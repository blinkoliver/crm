import React, { useState } from "react";
import Service from "../components/MyServices/Service";
import AddServiceModal from "../components/MyServices/AddServiceModal";
import SortServices from "../components/MyServices/SortServices";
import { services } from "../constants/services";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ServiceRefactor from "../components/MyServices/ServiceRefactor";

import "./MyServices.scss";

const MyServices = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
      {services.map((element) => (
        <Service
          onClick={toggle}
          key={element.taskName}
          date={element.date}
          taskName={element.taskName}
          price={element.price}
          status={element.status}
        />
      ))}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать или удалить?</ModalHeader>
        <ModalBody>
          <ServiceRefactor />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyServices;
