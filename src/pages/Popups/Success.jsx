import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
const Success = ({ showSuccess, setShowSuccess, message }) => {
  const handleClose = () => {
    setShowSuccess(false);
  };
  return (
    <Modal
      show={showSuccess}
      centered
      className="custom-popup-modal"
      size="md"
      onHide={handleClose}
    >
      <div className="modal-header-fixed">
        <button
          className="btn-close"
          onClick={handleClose}
          aria-label="Close"
        ></button>

        <div className="flex-center mt-5">
          <img src={Images.success} className="" alt="success" />
        </div>

        <h5 className="model-label pt-3">Successfully</h5>
        <div className="d-flex flex-col flex-center w-100 gap-2">
          <span className="thank-bar w-15"></span>
          <span className="thank-bar w-10"></span>
        </div>
      </div>

      <div className="popup-scroll mt-3">
        <div className="d-flex flex-center p-black">
         {message}
        </div>

        <button className="xbtn button-blue w-100 mt-5" onClick={handleClose}>
          BACK TO LOGIN
        </button>
      </div>
    </Modal>
  );
};
export default Success;
