import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../Modal/modal.css";

const index = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        📌 Assign test kits to patients
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pt-3 pb-3">
            <p className="text-center"><b>Here you can assign codes for test-kits you've got at your clinic.</b></p>
            <p className="text-center">You haven't ordered any test kits for your clinic</p>
            <div className="text-center">
            <Button className="bg-orange-color outline-orange-color fs-14 fw-bold">
            Order test kits for your clinic
            </Button>
            </div>
        </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default index;
