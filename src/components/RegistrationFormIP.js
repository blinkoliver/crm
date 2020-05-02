import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";

const customStyles = {
  valueContainer: () => ({
    height: "10vh",
    paddingLeft: "2vh",
  }),
  container: () => ({ marginTop: "2vh" }),
};

const RegistrationFormIP = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        style={{ marginTop: "0px" }}
        type="text"
        placeholder="Наименование ИП"
        name="IPName"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.IPName && errors.IPName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.IPName && errors.IPName.type === "maxLength" && (
        <p>This is field required max length of 10</p>
      )}
      <input
        type="text"
        placeholder="УНП"
        name="UNP"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.UNP && errors.UNP.type === "required" && <p>Обязательное поле</p>}
      <Controller
        as={
          <Select
            // options={ownershipForm}
            styles={customStyles}
            placeholder={"Город регистрации"}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => null,
            }}
          />
        }
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
        placeholder="ОКЭД"
        name="OKED"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.OKED && errors.OKED.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={InputMask}
        control={control}
        type="number"
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="Telephone"
        rules={{ required: true }}
      />
      {errors.Telephone && errors.Telephone.type === "required" && (
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
      <input type="submit" placeholder="Зарегистрироваться" />
    </form>
  );
};
export default RegistrationFormIP;
