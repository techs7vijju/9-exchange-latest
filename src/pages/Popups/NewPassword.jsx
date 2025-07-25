import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { forgotPassword } from "../../api/apiMethods";
import { BiSolidLock } from "react-icons/bi";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  // user_name: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(36, "Password must not exceed 36 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

function NewPassword({
  setNewPassword,
  newPassword,
  username,
  setShowSuccess,
  setMessage,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [apiErrors, setApiErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleClose = () => {
    setApiErrors([]);
    setLoading(false);
    setNewPassword(false);
    setShowSuccess(false);
    setFormData({
      password: "",
      confirm_password: "",
    });
    setValidationErrors({});
  };

  const validateField = async (name, value) => {
    try {
      const tempObj = { ...formData, [name]: value };

      await validationSchema.validateAt(name, tempObj);

      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));

      if (name === "password" && formData.confirm_password) {
        try {
          await validationSchema.validateAt("confirm_password", {
            ...tempObj,
            confirm_password: formData.confirm_password,
          });
          setValidationErrors((prev) => ({
            ...prev,
            confirm_password: "",
          }));
        } catch (confirmErr) {
          setValidationErrors((prev) => ({
            ...prev,
            confirm_password: confirmErr.message,
          }));
        }
      }
    } catch (err) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  const handleChange = async (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    await validateField(name, value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiErrors([]);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setValidationErrors({});
      const payload = {
        user_name: username,
        password: formData.password,
        confirm_password: formData.confirm_password,
      };

      const response = await forgotPassword(payload);

      if (response.status === true) {
        setLoading(false);
        setMessage(response.message);
        setShowSuccess(true);
        setApiErrors([]);
        setFormData({
          password: "",
          confirm_password: "",
        });
        setValidationErrors({});
        setNewPassword(false);
      } else {
        setApiErrors([
          { message: response.message || "Password reset failed" },
        ]);
      }
    } catch (error) {
      setLoading(false);

      if (error.name === "ValidationError") {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
      } else {
        setApiErrors([error || "An error occurred during registration"]);
      }
    }
  };

  return (
    <Modal
      show={newPassword}
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

        <h5 className="model-label pt-3">Set New Password</h5>
        <div className="d-flex flex-col flex-center w-100 gap-2">
          <span className="thank-bar w-15"></span>
          <span className="thank-bar w-10"></span>
        </div>

        {apiErrors.length > 0 && (
          <div className="alert alert-danger mt-2 mb-0">
            {apiErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>
      <div className="popup-scroll blue-color4">
        <form onSubmit={onSubmit}>
          <div className="mt-2">
            <label className="medium-font fw-400 white-font">User Name</label>
            <div className="d-flex align-items-center rounded px-1">
              <FaUser className="font-1rem py-1 white-font" />
              <input
                type="text"
                className="custom-form-control medium-font px-2 w-100"
                style={{
                  border: "transparent",
                  color: "white",
                  background: "transparent",
                }}
                value={username}
                disabled
                readOnly
              />
            </div>
            <hr className="white-line" />
          </div>

          <div className="mt-3">
            <label className="medium-font fw-400 white-font">
              New Password
            </label>
            <div className="d-flex align-items-center flex-between">
              <div className="w-90 d-flex">
                <span>
                  <BiSolidLock className="font-1rem py-1" />
                </span>
                <input
                  className="bg-none white-font medium-font px-2 w-100"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 36) {
                      handleChange("password", value);
                    }
                  }}
                  autoComplete="new-password"
                />
              </div>
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer w-10"
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <hr className="white-line" />
            <div
              className={`error-container x-small-font ${
                validationErrors.password ? "has-error" : ""
              }`}
            >
              {validationErrors.password}
            </div>
          </div>

          <div className="mt-3">
            <label className="medium-font fw-400 white-font">
              Confirm Password
            </label>
            <div className="d-flex align-items-center flex-between">
              <div className="w-90 d-flex">
                <span>
                  <BiSolidLock className="font-1rem py-1" />
                </span>
                <input
                  className="bg-none white-font medium-font px-2 w-100"
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 36) {
                      handleChange("confirm_password", value);
                    }
                  }}
                  autoComplete="new-password"
                />
              </div>
              <div
                onClick={toggleConfirmPasswordVisibility}
                className="cursor-pointer w-10"
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <hr className="white-line" />
            <div
              className={`error-container x-small-font ${
                validationErrors.confirm_password ? "has-error" : ""
              }`}
            >
              {validationErrors.confirm_password}
            </div>
          </div>

          <div className="flex-column text-center mt-3">
            <button
              type="submit"
              className={`${
                loading
                  ? "submit_button_loading"
                  : "submit_button cursor-pointer"
              } rounded-pill medium-font payment-card`}
              onClick={onSubmit}
              disabled={loading}
            >
              {loading ? (
                <div className="d-flex flex-center gap-2 align-items-center disabled-btn">
                  <span>UPDATING</span>
                  <div className="loader" />
                </div>
              ) : (
                <div>UPDATE PASSWORD</div>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <span className="black-font small-font">
            © 2025 Diamond Exchange New. All rights reserved.
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default NewPassword;
