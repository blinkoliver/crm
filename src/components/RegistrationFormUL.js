import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { ownershipForm } from "../constants/registration";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormUL.scss"

const customStyles = {
  valueContainer: () => ({
    height: "10vh",
    paddingLeft: "2vh",
  }),
};

const RegistrationFormUL = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Controller
        as={
          <Select
            options={ownershipForm}
            styles={customStyles}
            placeholder={"Форма организации"}
            components={{ IndicatorSeparator: () => null }}
          />
        }
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return selected;
        }}
        name="reactSelectOwnershipForm"
      />
      {errors.reactSelectOwnershipForm &&
        errors.reactSelectOwnershipForm.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Наименование ЮЛ"
        name="ULName"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.ULName && errors.ULName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={InputMask}
        control={control}
        placeholder="УНП"
        mask="999 999 999"
        maskChar="-"
        name="UNP"
        rules={{ required: true, minLength: 9 }}
        style={{ marginBottom: "2vh" }}
      />
      {errors.UNP && errors.UNP.type === "required" && <p>Обязательное поле</p>}
      {errors.UNP && errors.UNP.type === "minLength" && (
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
        name="Adress"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.Adress && errors.Adress.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ОКЭД"
        name="OKED"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.OKED && errors.OKED.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ФИО Руководителя"
        name="OwnerName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.OwnerName && errors.OwnerName.type === "required" && (
        <p>Обязательное поле</p>
      )}

      <Controller
        as={InputMask}
        control={control}
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="OwnerTelephone"
        rules={{ required: true }}
      />
      {errors.OwnerTelephone && errors.OwnerTelephone.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="ФИО Исполнителя"
        name="ExecutorName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.ExecutorName && errors.ExecutorName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={InputMask}
        control={control}
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="ExecutorTelephone"
        rules={{ required: true }}
      />
      {errors.ExecutorTelephone &&
        errors.ExecutorTelephone.type === "required" && (
          <p>Обязательное поле</p>
        )}
      <input
        type="text"
        placeholder="Электронный адрес"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && errors.Email.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.Email && errors.Email.type === "pattern" && (
        <p>Это не похоже электронный адрес</p>
      )}
      <input
        type="text"
        placeholder="Пароль"
        name="Password"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.Password && errors.Password.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <button className="registration-ul-submit" type="submit">Зарегистрироваться</button>
    </form>
  );
};
export default RegistrationFormUL;
