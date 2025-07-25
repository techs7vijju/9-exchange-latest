import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Form, Alert } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import {
  getSecurityQuestionsById,
  verifySecurityQuestions,
} from "../../api/apiMethods";
import TextInput from "../../components/form-elements/TextInput";

function ForgotPassword({
  setForgotPasswordModal,
  setBlockModel,
  forgotPasswordModal,
  setNewPassword,
  username,
  setUsername,
}) {
  const navigate = useNavigate();
  const [securityAnswers, setSecurityAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [seqQueError, setSeqQueError] = useState("");
  const [verifyError, setVerifyError] = useState("");
  const [retry, setRetry] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [apiErrors, setApiErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (forgotPasswordModal) {
      setSecurityAnswers([]);
      setQuestions([]);
      setError("");
      setSeqQueError("");
      setVerifyError("");
      setRetry(false);
      setIsBlocked(false);
      setUserNameError("");
      setApiErrors([]);
      setValidationErrors({});
      setUsername("");
    }
  }, [forgotPasswordModal]);

  useEffect(() => {
    if (failedAttempts >= 2) {
      setIsBlocked(true);
      localStorage.clear();
      navigate("/blocked");
    }
  }, [failedAttempts, navigate]);

  const isBlockedError = apiErrors?.some(
    (err) => err.message === "Try Again After 24 Hours."
  );

  useEffect(() => {
    if (isBlockedError) {
      setUsername("");
      setBlockModel(true);
      setForgotPasswordModal(false);
      setApiErrors([]);
    }
  }, [isBlockedError, navigate]);

  const handleAnswersChange = (questionId, answer) => {
    setSecurityAnswers((prev) => {
      const updatedAnswers = prev.filter(
        (item) => item.question_id !== questionId
      );
      updatedAnswers.push({ question_id: questionId, answer });
      return updatedAnswers;
    });
  };

  const GetSecurityQuestions = async () => {
    setLoading(true);

    if (!username.trim()) {
      setUserNameError("Username is required");
      setLoading(false);
      return;
    }

    setApiErrors([]);
    setUserNameError("");

    try {
      const response = await getSecurityQuestionsById(username);
      setLoading(false);
      if (response.status === true) {
        setQuestions(getRandomQuestions(response.data));
        setSecurityAnswers(
          response.data.map((q) => ({
            question_id: q.question_id,
            answer: "",
          }))
        );
        setFailedAttempts(response.count);
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
        setFailedAttempts((prev) => prev + 1);
      }
    }
  };

  const VerifySecurityQuestions = () => {
    setLoading(true);
    setApiErrors([]);
    setSeqQueError("");

    if (securityAnswers.some((answer) => !answer.answer.trim())) {
      setSeqQueError("Please answer all security questions");
      setLoading(false);
      return;
    }

    const payload = {
      user_name: username,
      securityAnswers: securityAnswers,
    };

    verifySecurityQuestions(payload)
      .then((response) => {
        setLoading(false);
        setApiErrors([]);
        if (response.status === true) {
          setSecurityAnswers([]);
          setNewPassword(true);
          setForgotPasswordModal(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
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
      });
  };

  const handleRetry = () => {
    setQuestions([]);
    setSecurityAnswers([]);
    setApiErrors([]);
    setRetry(false);
  };

  const getRandomQuestions = (questions, count = 2) => {
    return questions?.sort(() => Math.random() - 0.5).slice(0, count);
  };

  const handleClose = () => {
    setUsername("");
    setQuestions([]);
    setSecurityAnswers([]);
    setApiErrors([]);
    setRetry(false);
    setForgotPasswordModal(false);
    setFailedAttempts(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && forgotPasswordModal) {
        if (questions.length > 0) {
          VerifySecurityQuestions();
        } else {
          GetSecurityQuestions();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [questions, forgotPasswordModal]);

  const size = questions.length > 0 ? "lg" : "md";
  const dialogClassName = questions.length > 0 ? "custom-modal-wrapper" : "";
  const contentClassName = questions.length > 0 ? "custom-modal-box" : "";

  return (
    <Modal
      show={forgotPasswordModal}
      centered
      className="custom-popup-modal"
      size={size}
      onHide={handleClose}
    >
      <div className="modal-header-fixed">
        <button
          className="btn-close"
          onClick={handleClose}
          aria-label="Close"
        ></button>

        <h5 className="model-label pt-3">Forgot Password</h5>
        <div className="d-flex flex-col flex-center w-100 gap-2">
          <span className="thank-bar w-15"></span>
          <span className="thank-bar w-10"></span>
        </div>

        {!isBlockedError && apiErrors.length > 0 && (
          <div className="alert alert-danger mt-2 mb-0">
            {apiErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>
      <div className="popup-scroll blue-color4 mt-3">
        {questions.length > 0 && (
          <p className="text-center p-black">Answer Your Security Questions</p>
        )}
        {questions.length > 0 && (
          <div className="p-3 forgot-box text-center">
            <span className=" p-black2">
              All your answers must be correct to change your password.
              Otherwise, your account will be blocked if you enter any wrong
              answers. You have only 2 attempts.
            </span>
          </div>
        )}
        {questions.length > 0 && (
          <div className="text-center p-blue1 mt-2">
            {failedAttempts === 0
              ? "1 of 2 Attempts"
              : failedAttempts === 1
              ? "2 of 2 Attempts"
              : "0 - Account Blocked"}
          </div>
        )}
        {isBlocked && (
          <Alert variant="danger" className="text-center">
            Your account has been blocked due to too many failed attempts.
            Please contact support.
          </Alert>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <TextInput
              type="text"
              label="User Name"
              name="user_name"
              placeholder="Enter"
              value={username}
              onChange={(e) => {
                if (questions.length === 0) {
                  const value = e.target.value;
                  if (/^[a-zA-Z0-9]*$/.test(value) && value.length <= 15) {
                    setUsername(value);
                    setUserNameError("");
                  }
                }
              }}
              disabled={failedAttempts >= 2 || questions.length > 0}
              error={userNameError}
            />
          </div>

          {!questions.length && !isBlocked && (
            <div className="flex-column text-center mt-3">
              <button
                className="xbtn button-blue w-100"
                disabled={loading}
                onClick={GetSecurityQuestions}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm me-2"></span>
                )}
                {loading ? "Getting..." : "GET SECURITY QUESTIONS"}
              </button>
            </div>
          )}

          {questions?.map((q, index) => (
            <div key={q.question_id} className="mt-2">
              <TextInput
                type="text"
                label={`Q${index + 1}. ${q.questions}`}
                name={`answer-${q.question_id}`}
                placeholder="Enter Answer"
                value={
                  securityAnswers.find(
                    (item) => item.question_id === q.question_id
                  )?.answer || ""
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 100) {
                    handleAnswersChange(q.question_id, value);
                    setSeqQueError("");
                  }
                }}
                disabled={failedAttempts >= 2}
                error={seqQueError}
              />
            </div>
          ))}

          <div
            className={`error-container x-small-font ${
              seqQueError ? "has-error" : ""
            }`}
          >
            {seqQueError && (
              <span className="red-font small-font mb-1">{seqQueError}</span>
            )}
          </div>

          {retry && !isBlocked ? (
            <button
              className="xbtn button-blue w-100"
              disabled={loading}
              onClick={handleRetry}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm me-2"></span>
              )}
              {loading ? "Retrying..." : "RETRY"}
            </button>
          ) : (
            questions.length > 0 &&
            !isBlocked && (
              <div className="flex-column text-center mt-3">
                <button
                  className="xbtn button-blue w-100"
                  disabled={loading}
                  onClick={VerifySecurityQuestions}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  )}
                  {loading ? "SUBMITTING..." : "NEXT"}
                </button>
              </div>
            )
          )}
        </form>

        <p className="mt-5 text-center p-grey4">
          © 2025 Diamond Exchange New. All rights reserved.
        </p>
      </div>
    </Modal>
  );
}

export default ForgotPassword;
