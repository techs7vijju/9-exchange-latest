import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../../images/images";
const Blocked = ({ showBlocked, setShowBlocked }) => {
  return (
    <Modal
      show={showBlocked}
      onHide={() => setShowBlocked(false)}
      centered
      className="custom-login-modal"
    >
      <div className="flex-center">
        <img src={Images.blocked} />
      </div>
      <h3 className="thank-title flex-center">Blocked Account</h3>

        {/* two decorative bars */}
        <div className="thank-bar big"></div>
        <div className="thank-bar small"></div>
      <div className="flex-center p-2 fw-600">
        Your account has been permanently suspended.
      </div>
     <div className="flex-center p-2 fw-400 font-small text-center flex-column">
  <div>You have exceeded the allowed attempts. Please contact customer support</div>
  <div>to recover your account.</div>
</div>

      <button className="w-100 mt-3 login-button" >
        CONTACT US
      </button>
    </Modal>
  );
};
export default Blocked;
