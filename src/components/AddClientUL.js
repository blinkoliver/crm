import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./AddServiceForm.scss";
import SelectCity from "../components/SelectCity";
import Select from "react-select";
import { basedDocument } from "../constants/registration";
import InputMask from "react-input-mask";
import { reactSelectOwnershipFormStyle } from "../constants/componentsStyle";
import { ownershipForm } from "../constants/registration";

const AddClientUL = (props) => {
  const { handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
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
        style={{ marginBottom: "2vh" }}
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
        name="address"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.address && props.errors.address.type === "required" && (
        <p>Обязательное поле</p>
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
      {errors.phone && errors.phone.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.phone && errors.phone.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {errors.phone && errors.phone.type === "minLength" && (
        <p>Введите корректный номер</p>
      )}
      <input
        type="text"
        placeholder="ФИО Руководителя"
        name="fio2"
        ref={props.register({
          required: true,
          maxLength: 100,
          pattern: /[а-яА-Я]+/,
        })}
      />
      {props.errors.fio2 && props.errors.fio2.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {props.errors.fio2 && props.errors.fio2.type === "pattern" && (
        <p>Только кириллица</p>
      )}
      <Controller
        as={InputMask}
        control={props.control}
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="phone2"
        rules={{
          required: true,
          pattern: /[0-9+()/\s/g]{19}/,
          minLength: 19,
        }}
      />
      {errors.phone2 && errors.phone2.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.phone2 && errors.phone2.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {errors.phone2 && errors.phone2.type === "minLength" && (
        <p>Введите корректный номер</p>
      )}
      <Controller
        as={
          <Select
            options={basedDocument}
            styles={reactSelectOwnershipFormStyle}
            placeholder={"Действует на основании"}
            components={{ IndicatorSeparator: () => null }}
          />
        }
        control={props.control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return selected;
        }}
        name="basedDocument"
      />
      {props.errors.basedDocument &&
        props.errors.basedDocument.type === "required" && (
          <p>Обязательное поле</p>
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
      {props.errors.checkinAccaunt &&
        props.errors.checkinAccaunt.type === "required" && (
          <p>Обязательное поле</p>
        )}
      {props.errors.checkinAccaunt &&
        props.errors.checkinAccaunt.type === "pattern" && (
          <p>Введите корректный номер</p>
        )}
      {props.errors.checkinAccaunt &&
        props.errors.checkinAccaunt.type === "minLength" && (
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
    </form>
  );
};
export default AddClientUL;
