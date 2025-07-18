import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewPassword = ({
  showNewPassword,
  setShowNewPassword,
  setShowSuccess,
}) => {
  const [passwordVisible, setShowPasswordVisible] = useState(false);
  const handleSuccess = () => {
    setShowSuccess(true);
    setShowNewPassword(false);
  };

  return (
    <Modal
      show={showNewPassword}
      onHide={() => setShowNewPassword(false)}
      centered
      className="custom-login-modal"
    >
     <h3 className="thank-title flex-center">Set New Password</h3>

        {/* two decorative bars */}
        <div className="thank-bar big"></div>
        <div className="thank-bar small"></div>
      <div className="mb-3 position-relative">
        <div className="custom-label">New Password</div>
        <input
          className="custom-input pe-5"
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter"
        />
        <div
          className="eye-icon"
          onClick={() => setShowPasswordVisible((prev) => !prev)}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <div className="mb-3 position-relative">
        <div className="custom-label">Confirm New Password</div>
        <input
          className="custom-input pe-5"
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter"
        />
        <div
          className="eye-icon"
          onClick={() => setShowNewPassword((prev) => !prev)}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <button className="w-100 mt-3 login-button" onClick={handleSuccess}>
        SUBMIT
      </button>
    </Modal>
  );
};
export default NewPassword;
