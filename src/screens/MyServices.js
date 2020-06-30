import React, { useState, useEffect } from "react";
import Service from "../components/MyServices/Service";
import AddServiceModal from "../components/MyServices/AddServiceModal";
import SortServices from "../components/MyServices/SortServices";
import { services } from "../constants/services";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ServiceRefactor from "../components/MyServices/ServiceRefactor";
import { httpPost } from "../utils";

import "./MyServices.scss";

const MyServices = (props) => {
  const { className } = props;

  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    httpPost("/task/get_task_list/", {
      limit: 2,
      offset: 2,
    }).then((post) => {
      setTasks(post.tasks);
      console.log(tasks);
    });
  }, [tasks]);
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
      {tasks.map((element) => (
        <Service
          onClick={toggle}
          key={element.id}
          taskName={element.name}
          client={element.client}
          date={element.date}
          price={element.price}
          performer={element.performer}
          status={element.status}
          type={element.type}
          paid={element.paid}
        />
      ))}
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
