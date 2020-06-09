import React from "react";
import InputMask from "react-input-mask";
import SelectCity from "../components/SelectCity";
import { Controller } from "react-hook-form";
import "../components/MyServices/AddServiceForm.scss";

const AddClientIP = (props) => {

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
        type="text"
        placeholder="Регистрирующий орган"
        name="registration"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.registration &&
        props.errors.registration.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Дата государственной регистрации"
        name="date"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.date && props.errors.date.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Наименование банка"
        name="bankName"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.bankName && props.errors.bankName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={InputMask}
        control={props.control}
        placeholder="Расчетный счет"
        mask="BY99 aaaa 9999 9999 9999 9999 9999"
        maskChar="_"
        name="checkinAccaunt"
        rules={{
          required: true,
          pattern: /[0-9+()/\s/g]{34}/,
          minLength: 34,
        }}
      />
      {props.errors.checkinAccaunt && props.errors.checkinAccaunt.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.checkinAccaunt && props.errors.checkinAccaunt.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {props.errors.checkinAccaunt && props.errors.checkinAccaunt.type === "minLength" && (
        <p>Введите корректный номер</p>
      )}
      <Controller
        as={InputMask}
        control={props.control}
        placeholder="БИК Банка"
        mask="BAPBBY2X"
        maskChar="_"
        name="bikBank"
        rules={{
          required: true,
          pattern: /[0-9+()/\s/g]{19}/,
          minLength: 19,
        }}
      />
      {props.errors.bikBank && props.errors.bikBank.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.bikBank && props.errors.bikBank.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {props.errors.bikBank && props.errors.bikBank.type === "minLength" && (
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
      <button className="add-service-submit" type="submit">
        Добавить клиента
      </button>
    </>
  );
};
export default AddClientIP;
