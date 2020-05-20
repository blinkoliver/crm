import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormIP.scss";

const RegistrationFormIP = () => {
  const { register, handleSubmit, errors, control, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

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
        placeholder="Электронный адрес"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && errors.Email.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.Email && errors.Email.type === "pattern" && (
        <p>Введите правильный электронный адрес</p>
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
          Пароль должен состоять из латинских букв и цифр (от 9 до 16 символов),
          содержать хотя бы одну прописную и одну строчную букву, а также хотя
          бы одну цифру.
        </p>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
      {errors.password && errors.password.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.password && errors.password.type === "pattern" && (
        <p>
          Пароль должен состоять из латинских букв и цифр (от 9 до 16 символов),
          содержать хотя бы одну прописную и одну строчную букву, а также хотя
          бы одну цифру.
        </p>
      )}
      <input
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
        as={InputMask}
        control={control}
        placeholder="Телефон"
        mask="+375 (99) 999 99 99"
        maskChar="_"
        name="Telephone"
        rules={{ required: true, pattern: /[0-9+()/\s/g]{19}/, minLength: 19 }}
      />
      {errors.Telephone && errors.Telephone.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.Telephone && errors.Telephone.type === "pattern" && (
        <p>Введите корректный номер</p>
      )}
      {errors.Telephone && errors.Telephone.type === "minLength" && (
        <p>Введите корректный номер</p>
      )}
      <input
        type="text"
        placeholder="Наименование ИП"
        name="IPName"
        ref={register({
          required: true,
          maxLength: 50,
          minLength: 7,
          pattern: /[а-яА-Я.]+/,
        })}
      />
      {errors.IPName && errors.IPName.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {errors.IPName && errors.IPName.type === "maxLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {errors.IPName && errors.IPName.type === "minLength" && (
        <p>От 7 до 50 символов кириллицей</p>
      )}
      {errors.IPName && errors.IPName.type === "pattern" && (
        <p>Только кирилицей</p>
      )}
      <Controller
        as={InputMask}
        control={control}
        placeholder="УНП"
        mask="999 999 999"
        maskChar="_"
        name="UNP"
        rules={{ required: true, minLength: 11, pattern: /[0-9,/\s/g]{11}/ }}
        style={{ marginBottom: "2vh" }}
      />
      {errors.UNP && errors.UNP.type === "required" && <p>Обязательное поле</p>}
      {errors.UNP && errors.UNP.type === "minLength" && (
        <p>УНП должен состоять из 9 цифр</p>
      )}
      {errors.UNP && errors.UNP.type === "pattern" && (
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
      <button className="registration-ip-submit" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
export default RegistrationFormIP;
