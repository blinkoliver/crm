import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormIP.scss";
import {registrationURL} from "../constants/urls"

const RegistrationFormIP = () => {
  const { register, handleSubmit, errors, control, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const updateData = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      role_id: 1,
      data: {
        adress: data.adress,
        ipName: data.ipName,
        oked: data.oked,
        unp: data.unp,
      },
    };
    fetch({registrationURL}, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: updateData,
      }),
    })
      .then((response) => response.json())
      .then((post) => {
      });
    console.log(updateData);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="text"
        placeholder="Наименование ИП"
        name="ipName"
        ref={register({
          required: true,
          maxLength: 50,
          minLength: 7,
          pattern: /[а-яА-Я.]+/,
        })}
      />
      {errors.ipName && errors.ipName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.ipName && errors.ipName.type === "maxLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {errors.ipName && errors.ipName.type === "minLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {errors.ipName && errors.ipName.type === "pattern" && (
        <p>Только кирилицей</p>
      )}
      <Controller
        as={InputMask}
        style={{ marginBottom: "2vh" }}
        control={control}
        placeholder="УНП"
        mask="999 999 999"
        maskChar="_"
        name="unp"
        rules={{ required: true, minLength: 11, pattern: /[0-9,/\s/g]{11}/ }}
      />
      {errors.unp && errors.unp.type === "required" && <p>Обязательное поле</p>}
      {errors.unp && errors.unp.type === "minLength" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      {errors.unp && errors.unp.type === "pattern" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      <Controller
        as={<SelectCity />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return selected;
        }}
        name="reactSelectRegistrationCity"
      />
      {errors.reactSelectRegistrationCity &&
        errors.reactSelectRegistrationCity.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Адрес регистрации"
        name="adress"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.adress && errors.adress.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ОКЭД"
        name="oked"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.oked && errors.oked.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <button className="registration-ip-submit" type="submit">
        Зарегистрироваться
      </button>
     </form>
  );
};
export default RegistrationFormIP;
