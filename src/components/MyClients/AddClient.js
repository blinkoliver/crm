import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { clientOwnership } from "../../constants/registration";
import { reactSelectOwnershipStyle } from "../../constants/componentsStyle";
import AddClientFL from "./AddClientFL";
import AddClientIP from "./AddClientIP";
import AddClientUL from "./AddClientUL";
import "./AddClientForm.scss";

const AddClient = () => {
  const [selectedValue, setSelectedValue] = useState({});

  const { register, handleSubmit, watch, errors, control } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="add-client-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <Select
              placeholder={"Выберите форму деятельности"}
              options={clientOwnership}
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
          <AddClientFL register={register} errors={errors} control={control} />
        )}
        {selectedValue.value === 1 && (
          <AddClientIP register={register} errors={errors} control={control} />
        )}
        {selectedValue.value === 2 && (
          <AddClientUL register={register} errors={errors} control={control} />
        )}
      </form>
    </div>
  );
};
export default AddClient;
