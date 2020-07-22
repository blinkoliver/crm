import React, { useState } from "react";
import { Controller } from "react-hook-form";
import SelectClient from "./SelectClient";
import SelectExecutor from "./SelectExecutor";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddClient from "../MyClients/AddClient";
import Select from "react-select";
import { activities } from "../../constants/activities";
import { reactSelectActivitiesStyle } from "../../constants/componentsStyle";
import { paid } from "../../constants/paid";
import { httpPost } from "../../utils";
import SelectCity from "../../components/SelectCity";
import "./AddServiceForm.scss";
import { status } from "../../constants/status";

const TransportationForm = (props) => {
  const { className } = props;

  const [selectedStatus, setSelectedStatus] = useState({});
  const [selectedPaid, setSelectedPaid] = useState({});
  const [selectedType, setSelectedType] = useState({});
  const [fetchError, setFetchError] = useState(false);
  const [modalClient, setModalClient] = useState(false);
  const [modalExecutor, setModalExecutor] = useState(false);
  const [routesForMap, setRoutesForMap] = useState(props.routesForMap);

  const pushRoute = () => {
    let newRoute = { id: routesForMap.length + 1, value: "" };
    let routesArr = [...routesForMap, newRoute];
    setRoutesForMap(routesArr);
  };

  const toggleClient = () => {
    setModalClient(!modalClient);
  };
  const toggleExecutor = () => {
    setModalExecutor(!modalExecutor);
  };

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: props.currentTask,
  });
  const onSubmit = (data) => {
    let routes = [];
    Object.keys(data).map((key) => {
      if (key.startsWith("address")) {
        const index = key[key.length - 1];
        const newRoute = {
          city: data[`city${index}`],
          address: data[`address${index}`],
          point: data[`point${index}`],
        };
        routes = [...routes, newRoute];
      }
      return routes;
    });
    const updateData = {
      name: data.name,
      client: "1b99a4c0-c679-4245-a00c-7be79799f98e",
      date: data.date,
      price: parseInt(data.price, 10),
      performer: "8adac476-098d-4622-bce3-8bcfeae7f8c0",
      status: data.status.value,
      type: data.type.value,
      paid: data.paid.value,
      customer_id: null,
      additional_task: {
        route: routes,
        ttn: data.ttn,
        contract_number: data.contract_number,
        waybill: data.waybill,
      },
    };
    let difference = {};
    Object.keys(props.originalData).forEach((key) => {
      if (props.originalData[key] !== updateData[key]) {
        difference[key] = updateData[key];
      }
    });
    console.log(difference);

    httpPost(`rest/task/update_task/`, difference)
      .then((post) => {
        console.log("usluga uspeshno izmenena", post);
      })
      .catch((error) => {
        setFetchError(true);
        console.log(error);
      });
    console.log(data);
  };
  return (
    <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Наименование"
        name="name"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.name && errors.name.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <div className="add-clients-input-block">
        <Controller
          as={<SelectClient />}
          control={control}
          rules={{ required: false }}
          onChange={([selected]) => {
            return selected;
          }}
          name="client"
        />
        <button onClick={() => toggleClient()}>+</button>
      </div>
      <input
        type="date"
        placeholder="Дата"
        name="date"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.date && errors.date.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <input
        type="number"
        placeholder="Сумма"
        name="price"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.price && errors.price.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <div className="add-clients-input-block">
        <Controller
          as={<SelectExecutor />}
          control={control}
          rules={{ required: false }}
          onChange={([selected]) => {
            return selected;
          }}
          name="performer"
        />
        <button onClick={() => toggleExecutor()}>+</button>
      </div>
      <Controller
        as={
          <Select
            placeholder={"Статус"}
            options={status}
            components={{
              IndicatorSeparator: () => null,
              IndicatorsContainer: () => null,
            }}
            value={selectedStatus.label}
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedStatus(selected);
          return selected;
        }}
        control={control}
        name="status"
      />
      {errors.status && errors.status.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={
          <Select
            placeholder={"Платеж"}
            options={paid}
            components={{
              IndicatorSeparator: () => null,
              IndicatorsContainer: () => null,
            }}
            value={selectedPaid.label}
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedPaid(selected);
          return selected;
        }}
        control={control}
        rules={{ required: true }}
        name="paid"
      />
      {errors.paid && errors.paid.type === "required" && (
        <p>Обязательное поле</p>
      )}
      <Controller
        as={
          <Select
            placeholder={"Выберите форму деятельности"}
            options={activities}
            components={{
              IndicatorSeparator: () => null,
              IndicatorsContainer: () => null,
            }}
            value={selectedType.label}
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedType(selected);
          return selected;
        }}
        control={control}
        rules={{ required: true }}
        name="type"
      />
      {errors.type && errors.type.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {routesForMap.map((element) => (
        <div className="add-routes-block" key={element.id}>
          <Controller
            as={<SelectCity placeholder={"Населенный пункт"} />}
            control={control}
            rules={{ required: false }}
            onChange={([selected]) => {
              return selected;
            }}
            name={"city" + element.point}
          />
          <input
            type="text"
            placeholder="Адрес"
            name={"address" + element.point}
            ref={register({ required: true, maxLength: 100 })}
          />
          <input
            type="text"
            value={element.point}
            name={"point" + element.point}
            ref={register({ required: true, maxLength: 100 })}
          />
          <button onClick={() => pushRoute()}>+</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Номер ТТН"
        name="ttn"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Номер договора"
        name="contract_number"
        ref={register({
          required: true,
        })}
      />
      <input
        type="text"
        placeholder="Путевой лист"
        name="waybill"
        ref={register({ required: true, maxLength: 100 })}
      />
      <button className="add-service-submit" type="submit">
        Редактировать
      </button>

      <Modal isOpen={modalClient} toggle={toggleClient} className={className}>
        <ModalHeader toggle={toggleClient}>Добавить клиента</ModalHeader>
        <ModalBody>
          <AddClient />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleClient}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={modalExecutor}
        toggle={toggleExecutor}
        className={className}
      >
        <ModalHeader toggle={toggleExecutor}>Добавить исполнителя</ModalHeader>
        <ModalBody>
          <AddClient />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleExecutor}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
      {fetchError ? <p>Услуга не изменена, ошибка сервера</p> : <></>}
    </form>
  );
};
export default TransportationForm;
