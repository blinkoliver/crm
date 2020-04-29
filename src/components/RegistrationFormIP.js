import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

function RegistrationFormIP() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="text"
        placeholder="Наименование ИП"
        name="Наименование ИП"
        ref={register({ required: true, maxLength: 50 })}
      />
      <input
        type="text"
        placeholder="УНП"
        name="УНП"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Адрес регистрации"
        name="Адрес регистрации"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="ОКЭД"
        name="ОКЭД"
        ref={register({ required: true, maxLength: 100 })}
      />
      <InputMask
        placeholder="Телефон"
        // {...this.props}
        mask="+375 (99) 999 99 99"
        maskChar="_"
      />
      <input
        type="text"
        placeholder="Электронный адрес"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Пароль"
        name="Password"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input type="submit" />
    </form>
  );
}
export default RegistrationFormIP;
