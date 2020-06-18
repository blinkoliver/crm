import React, { useState } from "react";
import "./Transportation.scss";

const Transportation = (props) => {
  const [routes, setRoutes] = useState([{ id: 0, value: "" }]);

  const onInputChange = (id, value) => {};

  const pushRoute = () => {
    let newRoute = { id: routes.length, value: "" };
    let routesArr = [...routes, newRoute];
    setRoutes(routesArr);
  };
  return (
    <>
      {routes.map((element) => (
        <div className="add-routes-block">
          <input
            type="text"
            value={element.value}
            name="routes"
            onChange={(value) => onInputChange(element.id, value)}
            placeholder="Маршрут"
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
      {props.errors.ttn && props.errors.ttn.type === "required" && (
        <p>Обязательное поле</p>
      )}

      <input
        type="text"
        placeholder="Номер договора"
        name="contract"
        ref={props.register({
          required: true,
        })}
      />
      {props.errors.contract && props.errors.contract.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="text"
        placeholder="Путевой лист"
        name="waybild"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      {props.errors.waybild && props.errors.waybild.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <button className="add-service-submit" type="submit">
        Создать
      </button>
    </>
  );
};
export default Transportation;
