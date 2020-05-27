import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormIP.scss";

const RegistrationFormIP = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Наименование ИП"
        name="name"
        ref={props.register({
          required: true,
          maxLength: 50,
          minLength: 7,
          pattern: /[а-яА-Я.]+/,
        })}
      />
      {props.errors.name && props.errors.name.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.name && props.errors.name.type === "maxLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {props.errors.name && props.errors.name.type === "minLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {props.errors.name && props.errors.name.type === "pattern" && (
        <p>Только кирилицей</p>
      )}
      <Controller
        as={InputMask}
        style={{ marginBottom: "2vh" }}
        control={props.control}
        placeholder="УНП"
        mask="999 999 999"
        maskChar="_"
        name="unp"
        rules={{ required: true, minLength: 11, pattern: /[0-9,/\s/g]{11}/ }}
      />
      {props.errors.unp && props.errors.unp.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.unp && props.errors.unp.type === "minLength" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      {props.errors.unp && props.errors.unp.type === "pattern" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      <Controller
        as={<SelectCity />}
        control={props.control}
        rules={{ required: false }}
        onChange={([selected]) => {
          return selected;
        }}
        name="reactSelectRegistrationCity"
      />
      <input
        type="text"
        placeholder="Адрес регистрации"
        name="adress"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.adress && props.errors.adress.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ОКЭД"
        name="oked"
        ref={props.register({
          required: true,
          pattern: /[0-9]{5}/,
          maxLength: 5,
        })}
      />
      {props.errors.oked && props.errors.oked.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.oked && props.errors.oked.type === "pattern" && (
        <p>Нужно 5 цифр</p>
      )}
      {props.errors.oked && props.errors.oked.type === "maxLength" && (
        <p>Нужно 5 цифр</p>
      )}
      <button className="registration-ip-submit" type="submit">
        Зарегистрироваться
      </button>
    </>
  );
};
export default RegistrationFormIP;
