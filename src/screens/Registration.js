import React, { useRef } from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";
import RegistrationFormIP from "../components/RegistrationFormIP";
import RegistrationFormUL from "../components/RegistrationFormUL";
import { ownership } from "../constants/registration";
import { reactSelectOwnershipStyle } from "../constants/componentsStyle";
import { registrationURL } from "../constants/urls";
import "./Registration.scss";

const Registration = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    const updateData = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      role_id: 1,
      data: {
        tupe: data.reactSelectOwnership.value,
        ownershipForm: data.reactSelectOwnershipForm
          ? data.reactSelectOwnershipForm.value
          : "",
        name: data.name,
        unp: data.unp,
        city: data.reactSelectCity ? data.reactSelectCity.value : "",
        adress: data.adress,
        oked: data.oked,
        fio: data ? data.fio : "",
      },
    };
    fetch(
      { registrationURL },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updateData,
        }),
      }
    )
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
        localStorage.setItem("access_token", post.token);
        document.cookie = post.refresh_token;
      });
  };

  const [selectedValue, setSelectedValue] = useState({});

  return (
    <div className="registration">
      <div className="first-block">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Электронный адрес"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Обязательное поле</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Введите правильный электронный адрес</p>
          )}
          <Controller
            as={InputMask}
            control={control}
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
            name="password"
            type="password"
            placeholder="Пароль"
            ref={register({
              required: true,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=\w*[0-9])\w{9,16}$/,
            })}
          />
          {errors.password === undefined ? (
            <p>
              Пароль должен состоять из латинских букв и цифр (от 9 до 16
              символов), содержать хотя бы одну прописную и одну строчную букву,
              а также хотя бы одну цифру.
            </p>
          ) : (
            errors.password &&
            errors.password.type === "required" && <p>Обязательное поле</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p>
              Пароль должен состоять из латинских букв и цифр (от 9 до 16
              символов), содержать хотя бы одну прописную и одну строчную букву,
              а также хотя бы одну цифру.
            </p>
          )}
          <input
            style={{ marginBottom: "2vh" }}
            name="password_repeat"
            type="password"
            placeholder="Повторите пароль"
            ref={register({
              validate: (value) =>
                value === password.current || "Пароли не совпадают",
            })}
          />
          {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
          <Controller
            as={
              <Select
                placeholder={"Выберите форму деятельности"}
                options={ownership}
                components={{ IndicatorSeparator: () => null }}
                styles={reactSelectOwnershipStyle}
              />
            }
            onChange={([selected]) => {
              setSelectedValue(selected);
              return selected;
            }}
            control={control}
            rules={{ required: true }}
            name="reactSelectOwnership"
          />
          {errors.reactSelectOwnership &&
            errors.reactSelectOwnership.type === "required" && (
              <p>Обязательное поле</p>
            )}
          {selectedValue.value === "Индивидуальный предприниматель" && (
            <RegistrationFormIP
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {selectedValue.value === "Юридическое лицо" && (
            <RegistrationFormUL
              register={register}
              errors={errors}
              control={control}
            />
          )}
        </form>
      </div>
    </div>
  );
};
export default Registration;
