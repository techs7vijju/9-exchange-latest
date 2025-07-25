import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import ForgotPassword from "./ForgotPassword";
import * as Yup from "yup";
import { userLogin } from "../../api/apiMethods";
import { encryptData } from "../../utils/cryptoUtils";
import TextInput from "../../components/form-elements/TextInput";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({
  registerModal,
  setAdminResetPopup,
  adminResetPopup,

  showLogin,
  setShowLogin,
  setForgotPasswordModal,
  setShowRegister,
  onLoginSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [apiErrors, setApiErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (name, value) => {
    console.log("name, value", name, value);
    setFormData({ ...formData, [name]: value });
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      setValidationErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setApiErrors([]);
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setValidationErrors({});

      const response = await userLogin({
        login_name: formData.username,
        password: formData.password,
      });

      if (response.status === true) {
        localStorage.setItem("jwt_token", response?.token);
        const userData = {
          userId: response?.user?.id,
          userName: response?.user?.userid,
          county_id: response?.user?.county_id,
          created_admin_panel_id: response?.user?.created_admin_panel_id,
          created_by: response?.user?.created_by,
          web_site_id: response?.user?.web_site_id,
          currency_id: response?.user?.currency_id,
          email: response?.user?.email,
          phone_no: response?.user?.phone_no,
          photo: response?.user?.photo,
        };
        localStorage.setItem("user_data", encryptData(userData));
        localStorage.setItem("welcomeBonusId", response?.user?.promoId);

        if (Number(response?.user?.is_updated_password) === 2) {
          sessionStorage.setItem(
            "is_updated_password",
            response?.user?.is_updated_password
          );
          setAdminResetPopup(true);
          handleClose();
        }

        onLoginSuccess();
        setShowLogin(false);
        handleClose();
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

  const handleForgot = () => {
    setForgotPasswordModal(true);
    handleClose();
  };
  const handleRegistration = () => {
    setShowRegister(true);
    handleClose();
  };

  const handleClose = () => {
    setFormData({ username: "", password: "" });
    setValidationErrors({ username: "", password: "" });
    setLoading(false);
    setShowPassword(false);
    setApiErrors([]);
    setShowLogin(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && showLogin) {
        handleLogin();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [formData, showLogin]);

  return (
    <Modal
      show={showLogin}
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

        <h5 className="model-label pt-3">LOGIN</h5>
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
        <form onSubmit={handleLogin}>
          <div>
            <TextInput
              type="text"
              label="User Name"
              name="username"
              placeholder="Enter"
              value={formData.username}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z0-9_]*$/.test(value) && value.length <= 15) {
                  handleChange("username", value);
                }
              }}
              error={validationErrors.username}
            />
          </div>

          <div>
            <TextInput
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              placeholder="Enter"
              value={formData.password}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 36) {
                  handleChange("password", value);
                }
              }}
              error={validationErrors.password}
              togglePassword={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
            />
          </div>

          <div className="text-end">
            <p className="p-blue1" onClick={handleForgot}>
              FORGOT YOUR PASSWORD?
            </p>
          </div>

          <button className="xbtn button-blue w-100" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm me-2"></span>
            )}
            {loading ? "LOADING..." : "LOGIN"}
          </button>
        </form>

        <p className="mt-3 text-center p-blue4">
          Don't have an account yet?
          <span className="p-blue1" onClick={handleRegistration}>
            REGISTRATION
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default Login;
