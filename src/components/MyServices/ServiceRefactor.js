import React, { useState } from "react";
import "./ServiceRefactor.scss";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ChangeServiceForm from "./ChangeServiceForm";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="service-refactor">
      <button className="change" onClick={toggle}>
        Редактировать
      </button>
      <button className="delete">Удалить</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать услугу</ModalHeader>
        <ModalBody>
          <ChangeServiceForm />
          <Button color="secondary" onClick={toggle}>
            Отмена
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;