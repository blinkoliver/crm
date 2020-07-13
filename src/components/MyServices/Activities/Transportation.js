import React, { useState } from "react";
import { Controller } from "react-hook-form";
import SelectCity from "../../../components/SelectCity";
import "./Transportation.scss";

const Transportation = (props) => {
  const [routes, setRoutes] = useState([{ id: 0, value: "" }]);

  const pushRoute = () => {
    let newRoute = { id: routes.length, value: "" };
    let routesArr = [...routes, newRoute];
    setRoutes(routesArr);
  };

  return (
    <>
      {routes.map((element) => (
        <div className="add-routes-block" key={element.id}>
          <Controller
            as={<SelectCity />}
            control={props.control}
            rules={{ required: false }}
            onChange={([selected]) => {
              return selected;
            }}
            name={"city" + element.id}
          />
          <input
            type="text"
            placeholder="Адрес"
            name={"address" + element.id}
            ref={props.register({ required: true, maxLength: 100 })}
          />
          <input
            type="text"
            value={element.id}
            name={"point" + element.id}
            ref={props.register({ required: true, maxLength: 100 })}
          />
          <button onClick={() => pushRoute()}>+</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Номер ТТН"
        name="ttn"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Номер договора"
        name="contract_number"
        ref={props.register({
          required: true,
        })}
      />
      <input
        type="text"
        placeholder="Путевой лист"
        name="waybill"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      <button
        className="add-service-submit"
        type="submit"
        onClick={props.closeModal}
      >
        Создать
      </button>
    </>
  );
};
export default Transportation;
