import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { ownershipForm } from "../../constants/registration";
import SelectCity from "../SelectCity";
import "./RegistrationFormUL.scss";
import { reactSelectOwnershipFormStyle } from "../../constants/componentsStyle";

const RegistrationFormUL = (props) => {
  return (
    <>
      <Controller
        as={
          <Select
            options={ownershipForm}
            styles={reactSelectOwnershipFormStyle}
            placeholder={"Форма организации"}
            components={{ IndicatorSeparator: () => null }}
          />
        }
        control={props.control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return selected;
        }}
        name="reactSelectOwnershipForm"
      />
      {props.errors.reactSelectOwnershipForm &&
        props.errors.reactSelectOwnershipForm.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Наименование ЮЛ"
        name="name"
        ref={props.register({
          required: true,
          maxLength: 50,
          minLength: 2,
          pattern: /[а-яА-Я.]+/,
        })}
      />
      {props.errors.name && props.errors.name.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.name && props.errors.name.type === "maxLength" && (
        <p>От 2 до 50 символов кириллицей</p>
      )}
      {props.errors.name && props.errors.name.type === "minLength" && (
        <p>От 2 до 50 символов кириллицей</p>
      )}
      {props.errors.name && props.errors.name.type === "pattern" && (
        <p>Только кирилицей</p>
      )}
      <Controller
        as={InputMask}
        control={props.control}
        placeholder="УНП"
        mask="999 999 999"
        maskChar="_"
        name="unp"
        rules={{ required: true, minLength: 11, pattern: /[0-9,/\s/g]{11}/ }}
        style={{ marginBottom: "18px" }}
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
        as={<SelectCity placeholder={"Город регистрации"} />}
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
        name="address"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.address && props.errors.address.type === "required" && (
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
      <input
        type="text"
        placeholder="ФИО Руководителя"
        name="fio"
        ref={props.register({
          required: true,
          maxLength: 100,
          pattern: /[а-яА-Я]+/,
        })}
      />
      {props.errors.fio && props.errors.fio.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.fio && props.errors.fio.type === "pattern" && (
        <p>Только кириллица</p>
      )}
      <button className="registration-ul-submit" type="submit">
        Регистрирация
      </button>
      <button className="registration-ul-login" type="submit">
        Логин
      </button>
    </>
  );
};
export default RegistrationFormUL;
