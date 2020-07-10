import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import SelectClient from "./SelectClient";
import SelectExecutor from "./SelectExecutor";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AddClient from "../MyClients/AddClient";
import Select from "react-select";
import { activities } from "../../constants/activities";
import { status } from "../../constants/status";
import { paid } from "../../constants/paid";
import { reactSelectActivitiesStyle } from "../../constants/componentsStyle";
import Transportation from "./Activities/Transportation";
import PassengerTransportation from "./Activities/PassengerTransportation";
import { httpPost } from "../../utils";
import {testValues} from "../../constants/testValues"
import "./AddServiceForm.scss";

const AddServiceForm = (props) => {
  let history = useHistory();

  const { className } = props;

  const [selectedValue, setSelectedValue] = useState({});
  const [fetchError, setFetchError] = useState(false);
  const [modalClient, setModalClient] = useState(false);
  const [modalExecutor, setModalExecutor] = useState(false);
  

  const toggleClient = () => {
    setModalClient(!modalClient);
  };
  const toggleExecutor = () => {
    setModalExecutor(!modalExecutor);
  };

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: testValues,
  });

  const onSubmit = (data) => {
    const updateData = {
      name: data.name,
      client: "1b99a4c0-c679-4245-a00c-7be79799f98e",
      date: data.date,
      price: data.price,
      performer: "8adac476-098d-4622-bce3-8bcfeae7f8c0",
      status: data.status.value,
      type: data.type.value,
      paid: data.paid.value,
      customer_id: null,
      additional_task: {
        route: [
          { city: data.city, address: data.address, point: data.point },
          { city: data.city, address: data.address, point: data.point },
        ],
        ttn: data.ttn,
        contract_number: data.contract_number,
        waybill: data.waybill,
      },
    };
    console.log(data, updateData);
    httpPost(`rest/task/create_task/`, updateData)
      .then((post) => {
        history.push("/myServices");
        const task = post.id;
        console.log("usluga uspeshno sozdana", task);
      })
      .catch(() => setFetchError(true));
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
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedValue(selected);
          return selected;
        }}
        control={control}
        rules={{ required: true }}
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
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedValue(selected);
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
            styles={reactSelectActivitiesStyle}
          />
        }
        onChange={([selected]) => {
          setSelectedValue(selected);
          return selected;
        }}
        control={control}
        rules={{ required: true }}
        name="type"
      />
      {errors.type && errors.type.type === "required" && (
        <p>Обязательное поле</p>
      )}
      {selectedValue.value === 0 && (
        <Transportation register={register} errors={errors} control={control} />
      )}
      {selectedValue.value === 1 && (
        <PassengerTransportation
          register={register}
          errors={errors}
          control={control}
        />
      )}

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
      {fetchError ? <p>Услуга не создана, ошибка сервера</p> : <></>}
    </form>
  );
};
export default AddServiceForm;
