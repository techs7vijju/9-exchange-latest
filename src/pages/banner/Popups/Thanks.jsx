import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../../images/images";

const Thanks = ({ showThanks, setShowThanks }) => {
  return (
    <Modal
      show={showThanks}
      onHide={() => setShowThanks(false)}
      centered
      className="custom-login-modal"
    >
      <div className="thank-wrapper p-4">
        <h3 className="thank-title text-center mb-2">Thank You for Registering!</h3>

        <div className="thank-bar big mx-auto mb-1"></div>
        <div className="thank-bar small mx-auto mb-3"></div>

        <p className="recaptcha-notice text-center mb-4">
          Remember to&nbsp;
          <a
            href="/download-credentials"
            className="recaptcha-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            download
          </a>
          &nbsp;your&nbsp;
          <a
            href="/download-credentials#user"
            className="recaptcha-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            username
          </a>
          &nbsp;and&nbsp;
          <a
            href="/download-credentials#pass"
            className="recaptcha-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            password
          </a>
          .
        </p>

        <div className="d-flex justify-content-between align-items-start">
          {/* Credential Card */}
          <div className="login-card mb-3 me-3">
            <div className="copy-icon"></div>
            <div className="row">
              <div className="label">User Name</div>
              <div className="value">dia10b2cae1</div>
            </div>
            <div className="row">
              <div className="label">Password</div>
              <div className="value">ACCSxFrmcy</div>
            </div>
          </div>

          {/* Bonus Image */}
          <img
            src={Images.bonus}
            className="bonus-img"
            alt="Welcome Bonus"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Thanks;
