import React from "react";
import { useForm } from "react-hook-form";
import "./AddServiceForm.scss";

const addServiceFormURL = `http://altproduction.ru:8080`;

const AddServiceForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(
      { addServiceFormURL },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data,
        }),
      }
    )
      .then((response) => response.json())
      .then((post) => {
        localStorage.setItem("JWB", post.result);
      });
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
export default AddServiceForm;
