import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";
import RegistrationFormIP from "../components/Registration/RegistrationFormIP";
import RegistrationFormUL from "../components/Registration/RegistrationFormUL";
import { ownership } from "../constants/registration";
import { reactSelectOwnershipStyle } from "../constants/componentsStyle";
import { httpPost } from "../utils";
import { _getFingerprint } from "../fingerprint";
import "./Registration.scss";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/getUserInfo";

const Registration = (props) => {
  let history = useHistory();

  const [selectedValue, setSelectedValue] = useState({});
  const [fetchError, setFetchError] = useState(false);

  const { register, handleSubmit, watch, errors, control } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    const fingerprint = await _getFingerprint();

    const setSelect = (valueOwnership, valueOwnershipForm) =>
      valueOwnership === 0 ? 0 : valueOwnershipForm;

    const updateData = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      role_id: 1,
      fingerprint: fingerprint,
      data: {
        otype: setSelect(
          data.reactSelectOwnership.value,
          data.reactSelectOwnershipForm
            ? data.reactSelectOwnershipForm.value
            : ""
        ),
        name: data.name,
        unp: data.unp.replace(/\s+/g, ""),
        city_id: data.reactSelectRegistrationCity,
        address: data.address,
        oked: data.oked,
        full_name: data.fio === undefined ? "" : data.fio,
      },
    };
    console.log(data, updateData);
    httpPost(`rest/account/create/`, updateData)
      .then((post) => {
        localStorage.setItem("access_token", post.token);
        props.getUserInfo();
        history.push("/");
      })
      .catch(() => setFetchError(true));
  };
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
              Пароль должен состоять из букв и цифр (от 9 до 16 символов),
              содержать хотя бы одну прописную и одну строчную букву, а также
              хотя бы одну цифру.
            </p>
          ) : (
            errors.password &&
            errors.password.type === "required" && <p>Обязательное поле</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p>
              Пароль должен состоять из букв и цифр (от 9 до 16 символов),
              содержать хотя бы одну прописную и одну строчную букву, а также
              хотя бы одну цифру.
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
          {selectedValue.value === 0 && (
            <RegistrationFormIP
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {selectedValue.value === 7 && (
            <RegistrationFormUL
              register={register}
              errors={errors}
              control={control}
            />
          )}
        </form>
        {fetchError ? (
          <p>Ошибка с сервера скорее всего такой пользователь есть</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(null, mapDispatchToProps)(Registration);
