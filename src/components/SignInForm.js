import React from "react";
import { useForm } from "react-hook-form";
import "./SignInForm.scss";
import { hosting } from "../constants/urls";
import { Fetch } from "../utils";

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const updateData = {
      email: data.email,
      password: data.password,
      fingerprint: "sdadasdsa",
    };
    const httpGet = (path) => {
      Fetch(`${hosting}/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updateData,
        }),
      }).then((post) => {
        console.log(post);
        localStorage.setItem("access_token", post.token);
        localStorage.setItem("refresh_token", post.refresh_token);
      });
    };
    httpGet(`rest/account/login`);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Электронный адрес"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && errors.Email.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.Email && errors.Email.type === "pattern" && (
        <p>Введите правильный электронный адрес</p>
      )}
      <input
        type="password"
        placeholder="Пароль"
        name="password"
        ref={register({
          required: true,
          maxLength: 15,
          minLength: 5,
          pattern: /[0-9a-zA-z]/,
        })}
      />
      {errors.Password && errors.Password.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.Password && errors.Password.type === "maxLength" && (
        <p>От 5 до 15 символов латиницей и цифры</p>
      )}
      {errors.Password && errors.Password.type === "minLength" && (
        <p>От 5 до 15 символов латиницей и цифры</p>
      )}
      {errors.Password && errors.Password.type === "pattern" && (
        <p>От 5 до 15 символов латиницей и цифры</p>
      )}
      <button className="sign-in-submit" type="submit">
        Войти
      </button>
    </form>
  );
};
export default SignInForm;
