import React from "react";
import { useForm } from "react-hook-form";
import "./SignInForm.scss";

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://altproduction.ru:8080`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    })
      .then((response) => response.json())
      .then((post) => {
        localStorage.setItem("JWB", post.result);
      });
  };
  console.log(errors);

  return (
      <form className="sign-in-form"
        onSubmit={handleSubmit(onSubmit)}
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
          <p>Это не похоже на электронный адрес</p>
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
        <button className="sign-in-submit" type="submit">Войти</button>
      </form>
  );
};
export default SignInForm;
