import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import SelectCity from "../components/SelectCity";
import "./RegistrationFormIP.scss";

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
        type="password"
        placeholder="Пароль"
        name="Password"
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
      <button className="registration-ip-submit" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
export default RegistrationFormIP;
