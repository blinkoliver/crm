import React, { useState, useEffect } from "react";
import Service from "../components/MyServices/Service";
import AddServiceModal from "../components/MyServices/AddServiceModal";
import SortServices from "../components/MyServices/SortServices";
import Loading from "../components/Loading";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ServiceRefactor from "../components/MyServices/ServiceRefactor";
import { httpPost } from "../utils";

import "./MyServices.scss";

const MyServices = (props) => {
  const { className } = props;

  const [tasks, setTasks] = useState([]);
  const [currentServiceId, setCurrentServiceId] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setServicesLoading(true);
    httpPost("rest/task/get_task_list/", {
      limit: 100,
      offset: 0,
    })
      .then((post) => {
        setTasks(post.tasks);
      })
      .then(setServicesLoading(false));
  }, []);

  const toggle = () => {
    setModal(!modal);
  };
  return servicesLoading ? (
    <Loading />
  ) : (
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
          onClick={() => {
            setCurrentServiceId(element.id);
            toggle();
          }}
          key={element.id}
          name={element.name}
          client={element.client}
          date={element.date.slice(0, 10)}
          price={element.price}
          performer={element.performer}
          status={element.status}
          type={element.type}
          paid={element.paid}
        />
      ))}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать или удалить?</ModalHeader>
        <ModalBody>
          <ServiceRefactor
            id={currentServiceId}
            closeModal={() => setModal(false)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyServices;
