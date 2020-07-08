import React, { useState, useEffect } from "react";
import Service from "../components/MyServices/Service";
import AddServiceModal from "../components/MyServices/AddServiceModal";
import SortServices from "../components/MyServices/SortServices";
import { services } from "../constants/services";
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

  console.log(tasks)

  useEffect(() => {
    setServicesLoading(true);
    httpPost("rest/task/get_task_list/", {
      limit: 10,
      offset: 0,
    })
      .then((post) => {
        setTasks(post.tasks);
        console.log(post);
        console.log(tasks);
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
      {/* {tasks.map((element) => (
        <Service
          onClick={toggle(element.id)}
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
      ))} */}
      {/* {services.map((element) => (
        <Service
          onClick={() => {
            setCurrentServiceId(element.id);
            toggle();
          }}
          // onClick={toggle}
          key={element.id}
          date={element.date}
          taskName={element.name}
          price={element.price}
          status={element.status}
          id={element.id}
        />
      ))} */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Редактировать или удалить?</ModalHeader>
        <ModalBody>
          <ServiceRefactor id={currentServiceId} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyServices;
