import React from "react";
import { useForm } from "react-hook-form";
import { _getFingerprint } from "../fingerprint";
import { connect } from "react-redux";
import "./SignInForm.scss";
import { httpPost } from "../utils";
import { getUserInfo } from "../actions/getUserInfo";

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const fingerprint = await _getFingerprint();

    const updateData = {
      email: data.email,
      password: data.password,
      fingerprint: fingerprint,
    };
    httpPost(`rest/account/login/`, updateData).then((post) => {
      console.log(post);
      localStorage.setItem("access_token", post.token);
      getUserInfo();
    });
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
          pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=\w*[0-9])\w{9,16}$/,
        })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.password && errors.password.type === "pattern" && (
        <p>От 9 до 16 букв и цифры</p>
      )}
      <button className="sign-in-submit" type="submit">
        Войти
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(null, mapDispatchToProps)(SignInForm);
