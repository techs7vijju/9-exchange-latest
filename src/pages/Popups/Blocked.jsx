import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
const Blocked = ({ showBlocked, setShowBlocked }) => {
  const handleClose = () => {
    setShowBlocked(false);
  };
  return (
    <Modal
      show={showBlocked}
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
          <img src={Images.blocked} />
        </div>

        <h5 className="model-label pt-3">Blocked Account</h5>
        <div className="d-flex flex-col flex-center w-100 gap-2">
          <span className="thank-bar w-15"></span>
          <span className="thank-bar w-10"></span>
        </div>
      </div>

      <div className="popup-scroll mt-3">
        <div className="d-flex flex-center p-black">
          Your account has been permanently suspended.
        </div>
        <div className="d-flex text-center p-black2 mt-3">
          You have exceeded the allowed attempts. Please contact customer
          support to recover your account.
        </div>

        <button className="xbtn button-blue w-100 mt-5">CONTACT US</button>
      </div>
    </Modal>
  );
};
export default Blocked;
