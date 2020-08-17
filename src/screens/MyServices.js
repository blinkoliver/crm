import React, { useState, useEffect } from "react";
import Service from "../components/MyServices/Service";
import AddServiceModal from "../components/MyServices/AddServiceModal";
import Loading from "../components/Loading";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useHistory } from "react-router-dom";
import ServiceRefactor from "../components/MyServices/ServiceRefactor";
import { httpPost, httpPostTokenUpdate } from "../utils";
import "./MyServices.scss";

const MyServices = (props) => {
  const { className } = props;
  let history = useHistory();

  const [tasks, setTasks] = useState([]);
  const [currentServiceId, setCurrentServiceId] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteService = (id) => {
    httpPost(`rest/task/delete_task/`, { task_id: id })
      .then(() => {
        const updateTasks = tasks.filter((element) => element.id !== id);
        setTasks(updateTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAfterSubmit = () => {
    setServicesLoading(true);
    httpPost("rest/task/get_task_list/", {
      limit: 100,
      offset: 0,
    })
      .then((post) => {
        setTasks(post.tasks);
      })
      .then(setServicesLoading(false))
      .catch((post) => {
        switch (post.message) {
          case "Token is invalid":
            httpPostTokenUpdate("rest/account/update/");
            break;
          case "Wrong credentials":
            history.push("/signIn");
            break;
          default:
            console.log("net takoj oshibki");
        }
      });
  };

  useEffect(() => {
    setServicesLoading(true);
    httpPost("rest/task/get_task_list/", {
      limit: 100,
      offset: 0,
    })
      .then((post) => {
        setTasks(post.tasks);
      })
      .catch((post) => {
        switch (post.message) {
          case "Token is invalid":
            httpPostTokenUpdate("rest/account/update/");
            break;
          case "Wrong credentials":
            history.push("/signIn");
            break;
          default:
            console.log("net takoj oshibki");
        }
      })
      .then(setServicesLoading(false));
  }, [history]);

  const toggle = () => {
    setModal(!modal);
  };
  return servicesLoading ? (
    <Loading />
  ) : (
    <div className="my-services">
      <div className="add-and-sort">
        <div className="add">
          <AddServiceModal fetchAfterSubmit={() => fetchAfterSubmit()} />
        </div>
        <div className="sort"></div>
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
            deleteService={() => deleteService(currentServiceId)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyServices;
