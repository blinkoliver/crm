import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddServiceForm from "./AddServiceForm";
import "./AddServiceModal.scss"

const AddServiceModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        Создать услугу
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Создать услугу</ModalHeader>
        <ModalBody>
          <AddServiceForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddServiceModal;
