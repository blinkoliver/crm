import React from "react";
import SelectCity from "../SelectCity";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { clientDocument } from "../../constants/registration";
import { reactSelectOwnershipStyle } from "../../constants/componentsStyle";
import InputMask from "react-input-mask";
import "./AddClientForm.scss";

const AddClientFL = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="ФИО"
        name="fio"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.fio && props.errors.fio.type === "required" && (
        <p>Обязательное поле</p>
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
        name="adress"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.adress && props.errors.adress.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={
          <Select
            placeholder={"Выберите данные документа"}
            options={clientDocument}
            components={{ IndicatorSeparator: () => null }}
            styles={reactSelectOwnershipStyle}
          />
        }
        control={props.control}
        rules={{ required: true }}
        name="reactSelectClientDocument"
      />
      {props.errors.reactSelectClientDocument &&
        props.errors.reactSelectClientDocument.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Серия паспорта"
        name="series"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.series && props.errors.series.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Номер паспорта"
        name="number"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.number && props.errors.number.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Выдан"
        name="sum"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.number && props.errors.number.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Дата выдачи"
        name="date"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.date && props.errors.date.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={InputMask}
        control={props.control}
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="phone"
        rules={{
          required: true,
          pattern: /[0-9+()/\s/g]{19}/,
          minLength: 19,
        }}
      />
      {props.errors.phone && props.errors.phone.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.phone && props.errors.phone.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {props.errors.phone && props.errors.phone.type === "minLength" && (
        <p>Введите корректный номер</p>
      )}
      <input
        type="email"
        placeholder="Электронный адрес"
        name="email"
        ref={props.register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {props.errors.email && props.errors.email.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.email && props.errors.email.type === "pattern" && (
        <p>Введите правильный электронный адрес</p>
      )}
      <button className="add-client-form-submit" type="submit">
        Добавить клиента
      </button>
    </>
  );
};
export default AddClientFL;
