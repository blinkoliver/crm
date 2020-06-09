import React from "react";
import { useForm } from "react-hook-form";
import "./AddServiceForm.scss";

const AddServiceForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

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
      <input
        type="text"
        placeholder="Клиент"
        name="serviceName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.client && errors.client.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="date"
        placeholder="Дата"
        name="serviceName"
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
      <input
        type="text"
        placeholder="Исполнитель"
        name="serviceName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.executor && errors.executor.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Статус"
        name="serviceName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.status && errors.status.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <button className="add-service-submit" type="submit">
        Добавить
      </button>
    </form>
  );
};
export default AddServiceForm;
