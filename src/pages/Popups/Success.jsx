import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
const Success = ({ showSuccess, setShowSuccess, setShowBlocked }) => {
    const handleBlocked =()=>{
     setShowBlocked (true);  
     setShowSuccess(false); 
    };
  return (
    <Modal
      show={showSuccess}
      onHide={() => setShowSuccess(false)}
      centered
      className="custom-login-modal"
    >
      <div className="flex-center">
        <img src={Images.success} className="" alt="success" />
      </div>
       <h3 className="thank-title flex-center">Successfully</h3>

        {/* two decorative bars */}
        <div className="thank-bar big"></div>
        <div className="thank-bar small"></div>
      <div className="flex-center p-2 fw-500">
        <div>Your request has been successfully changed.</div>
      </div>
      <button className="w-100 mt-3 login-button" onClick={handleBlocked}>BACK TO LOGIN</button>
    </Modal>
  );
};
export default Success;
