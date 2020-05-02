import React from "react";
// import { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { ownershipForm } from "../constants/registration";

const customStyles = {
  valueContainer: () => ({
    height: "10vh",
  }),
};

const RegistrationFormUL = () => {
  // const { inputCityValue, setInputCityValue } = useState();
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // const handleChange = (selectValue) => {
  //   console.log(selectValue);
  // };

  return (
    // <div>
    //   <Select
    //     onChange={handleChange}
    //     options={ownershipForm}
    //   />
    // </div>

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
        name="reactSelect"
        defaultValue={{ value: "chocolate" }}
      />
      <input
        type="text"
        placeholder="Наименование ЮЛ"
        name="ULName"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.ULName && errors.ULName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="УНП"
        name="UNP"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.UNP && errors.UNP.type === "required" && <p>Обязательное поле</p>}
      <input
        type="text"
        placeholder="Адрес регистрации"
        name="RegistrationAdress"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.RegistrationAdress &&
        errors.RegistrationAdress.type === "required" && (
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
        name="Telephone"
      />
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
        name="Telephone"
      />
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
      <input type="submit" placeholder="Зарегистрироваться" />
    </form>
  );
};
export default RegistrationFormUL;
