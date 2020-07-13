import React, { useState } from "react";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ChangeServiceForm from "./ChangeServiceForm";
import { httpPost } from "../../utils";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteService = (id) => {
    httpPost(`rest/task/delete_task/`, { task_id: id })
      .then(() => {
        console.log("usluga udalena");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="service-refactor">
      <div>{props.id}</div>
      <button className="change" onClick={toggle}>
        Редактировать
      </button>
      <button
        className="delete"
        onClick={() => {
          deleteService(props.id);
          props.closeModal();
        }}
      >
        Удалить
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Редактировать услугу {props.id}
        </ModalHeader>
        <ModalBody>
          <ChangeServiceForm id={props.id} />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;
