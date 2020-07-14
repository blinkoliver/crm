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

  const [routes, setRoutes] = useState([{ id: 1, value: "" }]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [selectedPaid, setSelectedPaid] = useState({});
  const [selectedType, setSelectedType] = useState({});
  const [fetchError, setFetchError] = useState(false);
  const [modalClient, setModalClient] = useState(false);
  const [modalExecutor, setModalExecutor] = useState(false);

  const pushRoute = () => {
    let newRoute = { id: routes.length + 1, value: "" };
    let routesArr = [...routes, newRoute];
    setRoutes(routesArr);
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
    const updateData = {
      task_id: props.id,
      name: data.name,
      client: data.client,
      date: data.date,
      price: data.price,
      performer: data.performer,
      status: data.status.value,
      type: data.type.value,
      paid: data.paid.value,
      additional_task: data.paid,
    };
    console.log(data);
    httpPost(`task/update_task/`, updateData)
      .then((post) => {
        console.log("usluga uspeshno izmenena", post);
      })
      .catch(() => setFetchError(true));
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
      {props.routes.map((element) => (
        <div className="add-routes-block" key={element.id}>
          <Controller
            as={<SelectCity />}
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
