import React, { useState, useEffect } from "react";
import "./ServiceRefactor.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import TransportationForm from "./TransportationForm";
import { httpPost } from "../../utils";

const ServiceRefactor = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [statusLabel, setStatusLabel] = useState();
  const [paidLabel, setPaidLabel] = useState();
  const [type, setType] = useState();
  const [currentTask, setCurrentTask] = useState([]);
  const [routesForMap, setRoutesForMap] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    httpPost("rest/task/get_task/", {
      task_id: props.id,
    }).then((post) => {
      setRoutesForMap(
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

      // let routes = post.task.additional_task.route.map(
      //   ({ id, city, address, point }, index) => {
      //     const replacement = {
      //       city: "city" + index,
      //       id: "id" + index,
      //       address: "address" + index,
      //       point: "point" + index,
      //     };
      //     const replaced = Object.keys({ id, city, address, point }).map(
      //       (key) => {
      //         const newKey = replacement[key] || key;
      //         return { [newKey]: { id, city, address, point }[key] };
      //       }
      //     );
      //     const routes = replaced.reduce((a, b) => Object.assign({}, a, b));

      //     return routes;
      //   }
      // );

      const taskForFill = {};
      taskForFill["id"] = post.task.id;
      taskForFill["name"] = post.task.name;
      taskForFill["client"] = post.task.client;
      taskForFill["date"] = post.task.date.slice(0, 10);
      taskForFill["price"] = post.task.price;
      taskForFill["performer"] = post.task.performer;
      taskForFill["status"] = { label: statusLabel, value: post.task.status };
      taskForFill["type"] = { label: type, value: post.task.type };
      taskForFill["paid"] = { label: paidLabel, value: post.task.paid };
      taskForFill["ttn"] = post.task.additional_task.ttn;
      taskForFill["contract_number"] =
        post.task.additional_task.contract_number;
      taskForFill["waybill"] = post.task.additional_task.waybill;
      post.task.additional_task.route.forEach((route, index) => {
        taskForFill[`address${index}`] = route.address;
        taskForFill[`city${index}`] = { label: route.city, value: route.city };
        taskForFill[`route${index}`] = route.point;
        taskForFill[`id${index}`] = route.id;
      });
      setCurrentTask(taskForFill);
    });
  }, [props.id, statusLabel, paidLabel, type]);

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
          {type === "Грузоперевозки" && (
            <TransportationForm
              currentTask={currentTask}
              routesForMap={routesForMap}
            />
          )}
          {type === "Пасажироперевозки" && <TransportationForm />}
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ServiceRefactor;
