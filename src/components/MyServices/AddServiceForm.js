import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import SelectClient from "./SelectClient";
import SelectExecutor from "./SelectExecutor";
import { testValues } from "../../constants/testValues";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddClient from "../MyClients/AddClient";
import "./AddServiceForm.scss";

const AddServiceForm = (props) => {
  const { className } = props;

  const [modalClient, setModalClient] = useState(false);
  const [modalExecutor, setModalExecutor] = useState(false);

  const toggleClient = () => {
    setModalClient(!modalClient);
  };
  const toggleExecutor = () => {
    setModalExecutor(!modalExecutor);
  };

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: testValues,
  });
  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Наименование"
        name="serviceName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.serviceName && errors.serviceName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <div className="add-clients-input-block">
        <Controller
          as={<SelectClient />}
          control={control}
          rules={{ required: false }}
          onChange={([selected]) => {
            return selected;
          }}
          name="reactSelectRegistrationCity"
        />
        <button onClick={() => toggleClient()}>+</button>
      </div>
      <input
        type="date"
        placeholder="Дата"
        name="date"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.date && errors.date.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="number"
        placeholder="Сумма"
        name="sum"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.sum && errors.sum.type === "required" && <p>Обязательное поле</p>}
      <div className="add-clients-input-block">
        <Controller
          as={<SelectExecutor />}
          control={control}
          rules={{ required: false }}
          onChange={([selected]) => {
            return selected;
          }}
          name="reactSelectRegistrationCity"
        />
        <button onClick={() => toggleExecutor()}>+</button>
      </div>
      <input
        type="text"
        placeholder="Статус"
        name="status"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.status && errors.status.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <button className="add-service-submit" type="submit">
        Создать
      </button>
      <Modal isOpen={modalClient} toggle={toggleClient} className={className}>
        <ModalHeader toggle={toggleClient}>Добавить клиента</ModalHeader>
        <ModalBody>
          <AddClient />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleClient}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={modalExecutor}
        toggle={toggleExecutor}
        className={className}
      >
        <ModalHeader toggle={toggleExecutor}>Добавить исполнителя</ModalHeader>
        <ModalBody>
          <AddClient />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleExecutor}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
};
export default AddServiceForm;