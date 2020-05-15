import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddServiceForm from "./AddServiceForm"

const AddServiceModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>Добавить услугу</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Добавление Услуги</ModalHeader>
        <ModalBody>
            <AddServiceForm/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Отменить</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddServiceModal;