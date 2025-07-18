import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaUserFriends, FaEye, FaEyeSlash, FaBolt, FaRegCalendarAlt } from "react-icons/fa";

const Register = ({ showRegister, setShowRegister, setShowThanks }) => {
  const [selected, setSelected] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleThanks = () => {
    setShowThanks(true);
    setShowRegister(false);
  };

  return (
    <Modal
      show={showRegister}
      onHide={() => setShowRegister(false)}
      centered
      size="md"
      dialogClassName="custom-modal-width"
      className="custom-login-modal"
    >
      <h2 className="login-title1">REGISTER</h2>
      <div className="register-wrapper p-2">
        <div className="d-flex justify-content-center align-items-center my-3">
          <button
            className={`auth-btn me-2 ${
              selected === "register" ? "active-btn" : "inactive-btn"
            }`}
            onClick={() => setSelected("register")}
          >
            <FaUserFriends className="me-2" />
            SIGN UP / REGISTER
          </button>

          <button
            className={`auth-btn ${
              selected === "oneclick" ? "active-btn" : "inactive-btn"
            }`}
            onClick={() => setSelected("oneclick")}
          >
            <FaBolt className="me-2" />
            ONE CLICK
          </button>
        </div>

        {selected === "register" && (
          <>
            {/* Name & Username */}
            <div className="flex-between gap-3 my-3">
              <div className="input-group">
                <div className="custom-label">Name</div>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter"
                />
              </div>
              <div className="input-group">
                <div className="custom-label">User Name</div>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter"
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="flex-between gap-3 my-3">
              <div className="input-group position-relative">
                <div className="custom-label">Password</div>
                <div className="custom-input flex-between">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="all-none"
                  />
                  <span
                    className="input-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="input-group position-relative">
                <div className="custom-label">Confirm Password</div>
                <div className="custom-input flex-between">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="all-none"
                  />
                  <span
                    className="input-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-between gap-3 my-3">
              <div className="input-group">
                <div className="custom-label">Master/Parents ID (Optional)</div>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter"
                />
              </div>
              <div className="input-group position-relative">
  <div className="custom-label">Date of Birth</div>

  {/* the actual input */}
  <input
    type="text"
    className="custom-input dob-input"   // extra class for padding
    placeholder="dd-mm-yyyy"
  />

  {/* calendar icon */}
  <FaRegCalendarAlt className="calendar-icon" size={18} />
</div>
            </div>
            <div className="flex-between gap-3 my-3">
              <div className="input-group">
                <div className="custom-label">Select Country</div>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter"
                />
              </div>
              <div className="input-group">
                <div className="custom-label">Select Currency</div>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="flex-center blue-color mt-3 fw-600">
              Set Your Security Questions
            </div>
            <div className="mb-3 mt-2">
              <div className="fw-500 darkblue1-font">
                Q 1.What was your first email address?
              </div>
              <input
                className="custom-input mt-2"
                type="text"
                placeholder="Enter Answer"
              />
            </div>
            <div className="mb-3 mt-2">
              <div className="fw-500 darkblue1-font">
                Q 2.What was the first gift you ever received?
              </div>
              <input
                className="custom-input mt-2"
                type="text"
                placeholder="Enter Answer"
              />
            </div>
            <div className="mb-3 mt-2">
              <div className="fw-500 darkblue1-font">
                Q 3.What was your first pet’s name?
              </div>
              <input
                className="custom-input mt-2"
                type="text"
                placeholder="Enter Answer"
              />
            </div>
            <button className="w-100 mt-3 login-button">REGISTER</button>
            <p className="recaptcha-notice">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="recaptcha-link">
                Privacy Policy
              </a>
              and
              <a href="#" className="recaptcha-link">
                Terms of Service
              </a>
              apply.
            </p>
            <p className="recaptcha-notice">
              By clicking this button you confirm that you have read and agree
              to the{" "}
              <a href="#" className="recaptcha-link">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="recaptcha-link">
                Privacy Policy
              </a>{" "}
              of the company and confirm that you are of legal age.
            </p>
            <p className="login-redirect-text">
              <span className="label-text">Already have an account?</span>{" "}
              <a href="#" className="login-link">
                LOGIN
              </a>
            </p>
          </>
        )}
      </div>
      {selected === "oneclick" && (
        <div>
          {" "}
          <div className="flex-between gap-3 my-3">
            <div className="input-group">
              <div className="custom-label">Select Country</div>
              <input type="text" className="custom-input" placeholder="Enter" />
            </div>
            <div className="input-group">
              <div className="custom-label">Select Currency</div>
              <input type="text" className="custom-input" placeholder="Enter" />
            </div>
          </div>
          <div className="mb-3 mt-2">
            <div className="fw-500 darkblue1-font">
              Master/Parents ID (Optional)
            </div>
            <input
              className="custom-input mt-2"
              type="text"
              placeholder="Enter Answer"
            />
          </div>
          <p className="recaptcha-notice">
            By clicking this button you confirm that you have read and agree to
            the&nbsp;
            <a
              href="/terms-and-conditions"
              className="recaptcha-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            &nbsp;and&nbsp;
            <a
              href="/privacy-policy"
              className="recaptcha-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            &nbsp;of the company and confirm that you are of legal age.
          </p>
          <button className="w-100 mt-3 login-button" onClick={handleThanks}>
        REGISTER
      </button>
       <p className="login-redirect-text">
              <span className="label-text">Already have an account?</span>{" "}
              <a href="#" className="login-link">
                LOGIN
              </a>
            </p>
        </div>
      )}
    </Modal>
  );
};

export default Register;
