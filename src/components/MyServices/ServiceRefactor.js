import React, { useState, useEffect } from "react";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ChangeServiceForm from "./ChangeServiceForm";
import { httpPost } from "../../utils";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [statusLabel, setStatusLabel] = useState();
  const [paidLabel, setPaidLabel] = useState();
  const [currentTask, setCurrentTask] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    httpPost("rest/task/get_task/", {
      task_id: props.id,
    }).then((post) => {
      switch (post.task.status) {
        case 0:
          setStatusLabel("К выполнению");
          break;
        case 1:
          setStatusLabel("В работе");
          break;
        case 2:
          setStatusLabel("Завершён");
          break;
        case 3:
          setStatusLabel("Отменен");
          break;
        default:
          console.log("Нет таких значений");
      }
      post.task.paid === false
        ? setPaidLabel("Не оплачено")
        : setPaidLabel("Оплачено");

      const task = {
        id: post.task.id,
        name: post.task.name,
        client: post.task.client,
        date: post.task.date.slice(0, 10),
        price: post.task.price,
        performer: post.task.performer,
        status: { label: statusLabel, value: post.task.status },
        type: { label: "Грузоперевозки", value: 0 },
        paid: { label: paidLabel, value: post.task.paid },
        additional_task: post.task.paid,
      };
      setCurrentTask(task);
    });
  }, [props.id, statusLabel, paidLabel]);

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
