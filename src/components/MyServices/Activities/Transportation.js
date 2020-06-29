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
        <div className="add-routes-block" key={element.id}>
          <input
            type="text"
            value={element.value}
            name="ROUTE"
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
        name="TTN"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Номер договора"
        name="CONTRACT_NUMBER"
        ref={props.register({
          required: true,
        })}
      />
      <input
        type="text"
        placeholder="Путевой лист"
        name="WAYBILL"
        ref={props.register({ required: true, maxLength: 100 })}
      />
      <button className="add-service-submit" type="submit">
        Создать
      </button>
    </>
  );
};
export default Transportation;
