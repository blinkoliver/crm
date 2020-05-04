import React from "react";
import { useForm } from "react-hook-form";

const SignInForm = () => {
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
      {errors.Email && errors.Email.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input type="submit" placeholder="Войти" />
    </form>
  );
};
export default SignInForm;
