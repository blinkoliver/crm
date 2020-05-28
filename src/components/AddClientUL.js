import React from "react";
import { useForm } from "react-hook-form";
import "./AddServiceForm.scss";

const AddClientUL = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Наименование услуги"
        name="serviceName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.serviceName && errors.serviceName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Сумма по акту"
        name="sum"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.sum && errors.sum.type === "required" && <p>Обязательное поле</p>}
      <button className="add-service-submit" type="submit">
        Создать услугу
      </button>
    </form>
  );
};
export default AddClientUL;
