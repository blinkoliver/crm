import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddServiceForm.scss";

const ChangeServiceForm = () => {
  const [clients, setClients] = useState([{ id: 0, value: "" }]);
  const [executor, setExecutor] = useState([{ id: 0, value: "" }]);

  const onInputChange = (id, value) => {};

  const pushClient = () => {
    let newClient = { id: clients.length, value: "" };
    let clientsArr = [...clients, newClient];
    setClients(clientsArr);
  };
  const pushExecutor = () => {
    let newExecutor = { id: executor.length, value: "" };
    let executorsArr = [...executor, newExecutor];
    setExecutor(executorsArr);
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
      {clients.map((element) => (
        <div className="add-clients-input-block">
          <input
            type="text"
            value={element.value}
            name="client"
            onChange={(value) => onInputChange(element.id, value)}
            placeholder="Клиент"
            ref={register({ required: true, maxLength: 100 })}
          />
          <button onClick={() => pushClient()}>+</button>
        </div>
      ))}
      {errors.client && errors.client.type === "required" && (
        <p>Обязательное поле</p>
      )}
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
      {executor.map((element) => (
        <div className="add-clients-input-block">
          <input
            type="text"
            value={element.value}
            name="executor"
            onChange={(value) => onInputChange(element.id, value)}
            placeholder="Исполнитель"
            ref={register({ required: true, maxLength: 100 })}
          />
          <button onClick={() => pushExecutor()}>+</button>
        </div>
      ))}
      {errors.executor && errors.executor.type === "required" && (
        <p>Обязательное поле</p>
      )}
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
        Редактировать
      </button>
    </form>
  );
};
export default ChangeServiceForm;
