import React, { useState, useEffect } from "react";
import { httpPost } from "../../utils";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ChangeServiceForm from "./ChangeServiceForm";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    httpPost("/task/get_task/", {
      task_id: props.id,
    }).then((post) => {
      setTask(post);
      console.log(task);
    });
  }, []);

  const toggle = () => setModal(!modal);
  return (
    <div className="service-refactor">
      <div>{props.id}</div>
      <div>
        {
          (task.id,
          task.name,
          task.client,
          task.date,
          task.price,
          task.performer,
          task.status,
          task.type,
          task.paid)
        }
      </div>

      <button className="change" onClick={toggle}>
        Редактировать
      </button>
      <button className="delete">Удалить</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать услугу</ModalHeader>
        <ModalBody>
          <ChangeServiceForm />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;
