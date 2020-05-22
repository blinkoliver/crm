import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { ownershipForm } from "../constants/registration";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormUL.scss";
import { reactSelectOwnershipFormStyle } from "../constants/componentsStyle";

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
        name="UNP"
        rules={{ required: true, minLength: 11, pattern: /[0-9,/\s/g]{11}/ }}
        style={{ marginBottom: "2vh" }}
      />
      {props.errors.UNP && props.errors.UNP.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.UNP && props.errors.UNP.type === "minLength" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      {props.errors.UNP && props.errors.UNP.type === "pattern" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      <Controller
        as={<SelectCity />}
        control={props.control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return selected;
        }}
        name="reactSelectRegistrationCity"
      />
      {props.errors.reactSelectRegistrationCity &&
        props.errors.reactSelectRegistrationCity.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Адрес регистрации"
        name="Adress"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.Adress && props.errors.Adress.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ОКЭД"
        name="OKED"
        ref={props.register({
          required: true,
          pattern: /[0-9]{5}/,
          maxLength: 5,
        })}
      />
      {props.errors.OKED && props.errors.OKED.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.OKED && props.errors.OKED.type === "pattern" && (
        <p>Нужно 5 цифр</p>
      )}
      {props.errors.OKED && props.errors.OKED.type === "maxLength" && (
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
        Зарегистрироваться
      </button>
    </>
  );
};
export default RegistrationFormUL;
