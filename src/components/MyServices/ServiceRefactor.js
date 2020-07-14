import React, { useState, useEffect } from "react";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TransportationForm from "./TransportationForm";
import { httpPost } from "../../utils";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [routes, setRoutes] = useState();
  const [statusLabel, setStatusLabel] = useState();
  const [paidLabel, setPaidLabel] = useState();
  const [type, setType] = useState();
  const [currentTask, setCurrentTask] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    httpPost("rest/task/get_task/", {
      task_id: props.id,
    }).then((post) => {
      setRoutes(
        post.task.additional_task.route.filter(
          (element) => element.id.length > 3
        )
      );

      switch (post.task.type) {
        case 0:
          setType("Грузоперевозки");
          break;
        case 1:
          setType("Пасажироперевозки");
          break;
        default:
          console.log("Нет таких значений");
      }
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
      post.task.paid === 0
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
        type: { label: type, value: post.task.type },
        paid: { label: paidLabel, value: post.task.paid },
        ttn: post.task.additional_task.ttn,
        contract_number: post.task.additional_task.contract_number,
        waybill: post.task.additional_task.waybill,
        city1: "1234",
        address1: "Qwe",
        city2: "1234",
        address2: "Qwe",
      };
      setCurrentTask(task);
    });
  }, [props.id, statusLabel, paidLabel, type]);
  console.log(routes);
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
          {type === "Грузоперевозки" && (
            <TransportationForm currentTask={currentTask} routes={routes} />
          )}
          {type === "Пасажироперевозки" && <TransportationForm />}
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;
