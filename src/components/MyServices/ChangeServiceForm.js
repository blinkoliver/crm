import React, { useState } from "react";
import { Controller } from "react-hook-form";
import SelectClient from "./SelectClient";
import SelectExecutor from "./SelectExecutor";
import { useForm } from "react-hook-form";
import "./AddServiceForm.scss";

const ChangeServiceForm = () => {
  const [executor, setExecutor] = useState([{ id: 0, value: "" }]);

  const onInputChange = (id, value) => {};

  const pushExecutor = () => {
    let newExecutor = { id: executor.length, value: "" };
    let executorsArr = [...executor, newExecutor];
    setExecutor(executorsArr);
  };

  const { register, handleSubmit, errors, control } = useForm();
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
        <button onClick={() => pushExecutor()}>+</button>
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
        <button onClick={() => pushExecutor()}>+</button>
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
        Редактировать
      </button>
    </form>
  );
};
export default ChangeServiceForm;
