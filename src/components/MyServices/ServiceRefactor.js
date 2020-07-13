import React, { useState, useEffect } from "react";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ChangeServiceForm from "./ChangeServiceForm";
import { httpPost } from "../../utils";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [currentTask, setCurrentTask] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    httpPost("rest/task/get_task/", {
      task_id: props.id,
    }).then((post) => {
      console.log(post);
      const task = {
        id: post.task.id,
        name: post.task.name,
        client: post.task.client,
        date: post.task.date,
        price: post.task.price,
        performer: post.task.performer,
        status: post.task.status,
        type: post.task.type,
        paid: post.task.paid,
        additional_task: post.task.paid,
      };
      setCurrentTask(task);
    });
  }, [props.id]);

  console.log(currentTask);

  return (
    <div className="service-refactor">
      <button className="change" onClick={toggle}>
        Редактировать
      </button>
      <button
        className="delete"
        onClick={() => {
          props.deleteService();
          props.closeModal();
        }}
      >
        Удалить
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать услугу</ModalHeader>
        <ModalBody>
          <ChangeServiceForm currentTask={currentTask} />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;
