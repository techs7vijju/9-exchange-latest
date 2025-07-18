import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ForgotPassword from "./ForgotPassword";

const Login = ({ showLogin, setShowLogin, setShowForgot }) => {
  const handleCancel = () => {
    
    setShowLogin(false);
  };
  const [showPassword, setShowPassword] = useState(false);

  // const [userData, setUserData] = useState({
  //   userName: "",
  //   password: "",
  // });

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const handleForgot = () => {
    setShowForgot(true);
    onHide();
  };

  const userLogin = () => {
    if (!userName) {
      setUserNameError("username is Required");
    }

    if (!userPassword) {
      setShowPasswordError("Password is required");
    }
  };

  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleCancel}
        centered
        className="custom-login-modal"
      >
        <h3 className="thank-title text-center mb-2">LOGIN</h3>

        <div className="thank-bar big mx-auto mb-1"></div>
        <div className="thank-bar small mx-auto mb-3"></div>


        <div>
          <div>
            <div className="mb-3">
              <div className="custom-label">User Name</div>
              <input
                className="custom-input"
                type="text"
                placeholder="Enter"
                onChange={(e) => setUserName(e.target.value)}
                maxLength={15}
              />
              
              <div className="error-font">{userNameError}</div>
            </div>

            <div className="mb-3 position-relative">
              <div className="custom-label">Password</div>
              <input
                className="custom-input pe-5"
                type={showPassword ? "text" : "password"}
                placeholder="Enter"
                onChange={(e) => setUserPassword(e.target.value)}
                maxLength={36}
              />
              <div
                className="eye-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              <div className="error-font">{showPasswordError}</div>
            </div>

            <div className="text-end">
              <a href="#" className="forgot-password" onClick={handleForgot}>
                FORGOT YOUR PASSWORD?
              </a>
            </div>

            <button className="w-100 mt-3 login-button" onClick={userLogin}>
              LOGIN
            </button>
          </div>

          <div className="text-center mt-3 registration-text">
            Don’t have an account yet? <a href="#">REGISTRATION</a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
