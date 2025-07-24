import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import NewPassword from "./NewPassword";
const ForgotPassword = ({ showForgot, setShowForgot, setShowNewPassword }) => {
  const handleNewPassword = () => {
    setShowNewPassword(true);
    setShowForgot(false);
  };
  return (
    <>
      <Modal
        show={showForgot}
        onHide={() => setShowForgot(false)}
        centered
        className="custom-login-modal"
      >
        <h3 className="thank-title flex-center">Forgot Password</h3>

        {/* two decorative bars */}
        <div className="thank-bar big"></div>
        <div className="thank-bar small"></div>
        <div className="flex-center p-2 fw-500">
          <div>Answer Your Security Questions</div>
        </div>
        <div className="grey-bg p-2 font-small fw-400">
          All your answers must be correct to change your password. Otherwise,
          your account will be blocked if you enter any wrong answers. You have
          only 2 attempts.
        </div>
        <div className="lightblue-font flex-center fw-500 p-2">
          1 of 2 Attempts
        </div>
        <div className="mb-3">
          <div className="fw-500 darkblue1-font">
            Q 1.What was your first email address?
          </div>
          <input
            className="custom-input mt-2"
            type="text"
            placeholder="Enter"
          />
        </div>
        <button className="w-100 mt-3 login-button" onClick={handleNewPassword}>
          NEXT
        </button>
      </Modal>
    </>
  );
};
export default ForgotPassword;
