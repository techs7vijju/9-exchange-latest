import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
import { useMediaQuery } from "react-responsive";
import { FaCopy } from "react-icons/fa";

const ThanksSignup = ({ showThanksSignup, setShowThanksSignup }) => {
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const handleClose = () => {
    setShowThanksSignup(false);
  };
  return (
    <Modal
      show={showThanksSignup}
      centered
      className="custom-popup-modal"
      size="lg"
      onHide={handleClose}
    >
      <div className="modal-header-fixed">
        <button
          className="btn-close"
          onClick={handleClose}
          aria-label="Close"
        ></button>

        <h5 className="model-label pt-3">Thank You for Registering!</h5>
        <div className="d-flex flex-col flex-center w-100 gap-2">
          <span className="thank-bar w-15"></span>
          <span className="thank-bar w-10"></span>
        </div>

        <p className="d-flex flex-center p-grey4 pt-3">
          Remember to <span className="p-blue1 "> download </span> your{" "}
          <span className="p-blue1"> username </span> and{" "}
          <span className="p-blue1"> password </span>.
        </p>

        {apiErrors.length > 0 && (
          <div className="alert alert-danger mt-2 mb-0">
            {apiErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>

      <div
        className={
          isMobile
            ? "d-flex flex-col gap-3 p-3"
            : "d-flex justify-content-between align-items-center gap-3 p-3"
        }
      >
        <div className="d-flex flex-col w-100 gap-3">
          <div className="border-blue">
            <div className="d-flex justify-content-between align-items-center">
              <div className="row">
                <div className="copy-text">User Name</div>
                <div className="copy-value">dia10b2cae1</div>
              </div>
              <div className="copy-icon">
                <FaCopy />
              </div>
            </div>

            <div className="custom-line custom-line-grey-color"></div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="row">
                <div className="copy-text">Password</div>
                <div className="copy-value">ACCSxFrmcy</div>
              </div>
              <div className="copy-icon">
                <FaCopy />
              </div>
            </div>
          </div>

          <button disabled={loading} className="xbtn button-green2">
            {loading && (
              <span className="spinner-border spinner-border-sm me-2"></span>
            )}
            {loading ? "Downloading..." : "Download as Pdf"}
          </button>
        </div>
        <div className="w-100">
          <img src={Images.bonus} className="bonus-img" alt="Welcome Bonus" />
        </div>
      </div>
    </Modal>
  );
};

export default ThanksSignup;
