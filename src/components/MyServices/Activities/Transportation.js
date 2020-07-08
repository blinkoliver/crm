import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Transportation.scss";
import { ListGroupItem } from "reactstrap";

const Transportation = (props) => {
  const [transportationInfo, setTransportationInfo] = useState();
  const [routes, setRoutes] = useState([{ id: 0, value: "" }]);
  const { register, handleSubmit } = useForm();

  const onInputChange = (id, value) => {};

  const pushRoute = () => {
    let newRoute = { id: routes.length, value: "" };
    let routesArr = [...routes, newRoute];
    setRoutes(routesArr);
  };


  // {
  //   ROUTE: [
  //     {
  //       CITY: uuid, 
  //       address:"", 
  //       point: int 
  //     },
  //   ],
  //   TTN: "",
  //   CONTRACT_NUMBER: "",
  //   WAYBILL: "" 
  // }

  const onSubmit = (data) => {
    const updateData = {
      ROUTE: data.name,
      TTN: data.TTN,
      CONTRACT_NUMBER: data.CONTRACT_NUMBER,
      WAYBILL: data.WAYBILL,
    };
    console.log(data, updateData);
  };

  return (
    <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
      {routes.map((element) => (
        <div className="add-routes-block" key={element.id}>
          <input
            type="text"
            value={element.value}
            name="ROUTE"
            onChange={(value) => onInputChange(element.id, value)}
            placeholder="Маршрут"
            ref={register({ required: true, maxLength: 100 })}
          />
          <button onClick={() => pushRoute()}>+</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Номер ТТН"
        name="TTN"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Номер договора"
        name="CONTRACT_NUMBER"
        ref={register({
          required: true,
        })}
      />
      <input
        type="text"
        placeholder="Путевой лист"
        name="WAYBILL"
        ref={register({ required: true, maxLength: 100 })}
      />
      <button className="add-service-submit" type="submit">
        Создать
      </button>
    </form>
  );
};
export default Transportation;
