import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import {
  FaUserFriends,
  FaEye,
  FaEyeSlash,
  FaBolt,
  FaRegCalendarAlt,
  FaUser,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

const emailRegex =
  /^(([a-z\d+_\-][a-z\d+'._\-]*[a-z\d+_\-])|([a-z\d+_\-]{1,2}))@((([a-z\d][a-z\d\-]{0,100}[a-z\d])|([a-z\d]))\.)+[a-z]{2,}$/i;

const validationSchema1 = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces")
    .matches(/[A-Za-z]/, "Name must contain at least one letter")
    .min(2, "Name must be at least 2 characters long")
    .max(60, "Name must not exceed 60 characters"),

  user_name: Yup.string()
    .required("User Name is required")
    .matches(
      /^[A-Za-z0-9_]+$/,
      "User Name can only contain letters, numbers, and Underscore"
    )
    .min(5, "User Name must be at least 5 characters long")
    .max(15, "User Name must not exceed 15 characters"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(36, "Password must not exceed 36 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  masterID: Yup.string()
    .matches(
      /^[A-Za-z0-9_]+$/,
      "MasterID can only contain letters, numbers, and _"
    )
    .min(5, "MasterID must be at least 5 characters long")
    .max(15, "MasterID must not exceed 15 characters")
    .notRequired()
    .nullable()
    .transform((value) => (value === "" ? null : value)),
  dob: Yup.date()
    .required("Date of Birth is required")
    .typeError("Invalid Date of Birth")
    .test("age", "You must be at least 18 years old", (value) => {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      return (
        age > 18 ||
        (age === 18 &&
          today >=
            new Date(birthDate.setFullYear(birthDate.getFullYear() + 18)))
      );
    }),
  country_id: Yup.number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Country is required")
    .typeError("Country must be a number"),
  currency_id: Yup.number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Currency is required")
    .typeError("Currency must be a number"),
  email: Yup.string()
    .notRequired()
    .test("is-valid-email", "Invalid email format or too short", (value) => {
      if (!value || value.trim() === "") return true;
      return value.length >= 6 && value.length <= 100 && emailRegex.test(value);
    }),
});

const Register = ({
  showRegister,
  setShowRegister,
  isChecked,
  setLoginModal,
  setTermsPopup,
  setIsChecked,
  setIsAgreed,
  isAgreed,
  setMessage,
  setRegistrationSuccessfull,
  setOpenSuccessNavPopup,
}) => {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [securityQuestions, setSecurityQuestions] = useState([]);
  const hasFetchedData = useRef(false);
  const [apiErrors, setApiErrors] = useState([]);
  const [secQuError, setSecQuError] = useState("");
  const [fetchingError, setFetchingError] = useState("");
  const [userError, setUserError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const [buttonHighlight, setButtonHighlight] = useState(0);
  const datePickerRef = useRef(null);
  const salutations = ["Mr", "Mrs", "Miss", "Ms"];
  const title = salutations[buttonHighlight] || "Mr";
  const [selectedCountryItem, setSelectedCountryItem] = useState("");
  const [countrydropdownOpen, setCountrydropdownOpen] = useState(false);
  const [selectedCurrencyItem, setSelectedCurrencyItem] = useState("");
  const [currencydropdownOpen, setCurrencydropdownOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [currencySearchTerm, setCurrencySearchTerm] = useState("");
  const [selectedForm, setSelectedForm] = useState("register");
  const [checkBoxes, setCheckBoxes] = useState({
    age_agree: false,
    agree_policy: false,
  });

  useEffect(() => {
    setCheckBoxes((prev) => ({
      ...prev,
      age_agree: isChecked,
      agree_policy: isAgreed,
    }));
  }, [isChecked, isAgreed]);

  const [formData, setFormData] = useState({
    title: title,
    name: "",
    lastName: "",
    user_name: "",
    password: "",
    confirmPassword: "",
    masterID: "",
    dob: "",
    country_id: "",
    currency_id: "",
    email: "",
    securityQuestions: [],
  });

  const validationSchema2 = Yup.object().test(
    "at-least-3-answers",
    "You must answer at least 3 security questions",
    function () {
      const answeredCount = formData.securityQuestions.filter(
        (q) => q.answer && q.answer.trim() !== ""
      ).length;
      return answeredCount >= 3;
    }
  );

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    lastName: "",
    user_name: "",
    password: "",
    confirmPassword: "",
    dob: "",
    country_id: "",
    currency_id: "",
    email: "",
    age_agree: false,
    agree_policy: false,
  });

  const securityAnswerSchema = Yup.string()
    .min(2, "Answer must be at least 2 characters")
    .max(100, "Answer must not exceed 100 characters")
    .required("Answer is required");

  useEffect(() => {
    if (
      securityQuestions.length > 0 &&
      formData.securityQuestions.length == 0
    ) {
      setFormData((prev) => ({
        ...prev,
        securityQuestions: securityQuestions.map((q) => ({
          question_id: q.question_id,
          answer: "",
        })),
      }));
    }
  }, [securityQuestions]);

  useEffect(() => {
    if (!showRegister || hasFetchedData.current) return;

    hasFetchedData.current = true;

    fetchData();
  }, [showRegister]);

  const fetchData = async () => {
    try {
      const [countriesResponse, questionsResponse] = await Promise.all([
        getUserCountries(),
        getSecurityQuestions(),
      ]);

      if (countriesResponse?.status === true) {
        setCountries(countriesResponse.data);
      }

      if (questionsResponse?.status === true) {
        setSecurityQuestions(questionsResponse.data);
        setFormData((prev) => ({
          ...prev,
          securityQuestions: questionsResponse.data.map((question) => ({
            question_id: question.question_id,
            answer: "",
          })),
        }));
      }
    } catch (error) {
      setFetchingError(error?.message || "Failed to load required data");
    } finally {
      hasFetchedData.current = true;
    }
  };

  const handleChange = async (e, dateValue) => {
    let name, value;

    if (e.target) {
      name = e.target.name;
      value = e.target.value;

      if (name?.startsWith("question_")) {
        const questionId = parseInt(name.split("_")[1]);
        setFormData((prev) => ({
          ...prev,
          securityQuestions: prev.securityQuestions.map((q) =>
            q.question_id === questionId ? { ...q, answer: value } : q
          ),
        }));
        if (value.length === 0) {
          setValidationErrors((prev) => ({ ...prev, [name]: "" }));
          return;
        }
        try {
          await securityAnswerSchema.validate(value);
          setValidationErrors((prev) => ({ ...prev, [name]: "" }));
        } catch (err) {
          setValidationErrors((prev) => ({ ...prev, [name]: err.message }));
        }

        return;
      }
    } else {
      name = e;
      value = dateValue instanceof Date ? dateValue.toISOString() : dateValue;
    }

    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    try {
      await validationSchema1.validateAt(name, updatedFormData);
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));

      if (name === "password" && updatedFormData.confirmPassword) {
        try {
          await validationSchema1.validateAt(
            "confirmPassword",
            updatedFormData
          );
          setValidationErrors((prev) => ({ ...prev, confirmPassword: "" }));
        } catch (confirmErr) {
          setValidationErrors((prev) => ({
            ...prev,
            confirmPassword: confirmErr.message,
          }));
        }
      }

      if (name === "confirmPassword" && updatedFormData.password) {
        try {
          await validationSchema1.validateAt(
            "confirmPassword",
            updatedFormData
          );
          setValidationErrors((prev) => ({ ...prev, confirmPassword: "" }));
        } catch (confirmErr) {
          setValidationErrors((prev) => ({
            ...prev,
            confirmPassword: confirmErr.message,
          }));
        }
      }
    } catch (err) {
      setValidationErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData((prev) => ({
      ...prev,
      country_id: selectedCountry.id,
    }));
    setValidationErrors((prev) => ({ ...prev, country_id: "" }));
    setSelectedCountryItem(selectedCountry.name);
    setCountrydropdownOpen(false);
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setFormData((prev) => ({
      ...prev,
      currency_id: selectedCurrency.id,
    }));
    setSelectedCurrencyItem(selectedCurrency);
    setValidationErrors((prev) => ({ ...prev, currency_id: "" }));
    setCurrencydropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setCheckBoxes((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (name === "age_agree") {
      setIsChecked(updatedValue);
    }
    if (name === "agree_policy") {
      setIsAgreed(updatedValue);
    }

    setValidationErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const fetchUsername = async (user_name) => {
    setUserError("");

    if (!user_name) {
      setUserError("User Name is required");
      return false;
    }

    try {
      setIsUsernameLoading(true);
      const response = await verifyUsername({ user_name });

      if (response.status === true) {
        setUserError("");
        return true;
      } else {
        setUserError(
          response?.message ||
            "User Name verification failed. Please try a different user name."
        );
        return false;
      }
    } catch (error) {
      const { apiErrors } = handleApiError(error);
      if (Array.isArray(apiErrors) && apiErrors.length > 0) {
        setUserError(apiErrors[0].message || "Something went wrong");
      } else {
        setUserError("Something went wrong");
      }

      return false;
    } finally {
      setIsUsernameLoading(false);
    }
  };

  const handleSubmit = async () => {
    setApiErrors([]);
    try {
      await validationSchema1.validate(formData, { abortEarly: false });

      const answeredQuestions = formData.securityQuestions.filter(
        (q) => q.answer && q.answer.trim() !== ""
      );

      if (answeredQuestions.length < 3) {
        setSecQuError("You must answer at least 3 security questions.");
        return;
      }

      setLoading(true);

      const {
        securityQuestions,
        confirmPassword,
        ...formDataWithoutQuestions
      } = formData;

      let formattedDob = "";
      if (formDataWithoutQuestions.dob) {
        const date = new Date(formDataWithoutQuestions.dob);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        formattedDob = `${year}-${month}-${day}`;
      }

      const filteredFormData = Object.fromEntries(
        Object.entries(formDataWithoutQuestions).filter(
          ([_, value]) => value !== undefined && value !== null && value !== ""
        )
      );

      if (formattedDob) {
        filteredFormData.dob = formattedDob;
      }

      const payload = {
        ...filteredFormData,
        securityQuestions: answeredQuestions,
        title: salutations[buttonHighlight] || "Mr",
        confirm_password: confirmPassword,
      };

      if (!confirmPassword) {
        delete payload.confirm_password;
      }

      const response = await signUpUser(payload);

      if (response.status === true) {
        const userInfo = response?.user;
        const userData = {
          userId: userInfo?.id,
          userName: userInfo?.userid,
          county_id: userInfo?.county_id,
          created_admin_panel_id: userInfo?.created_admin_panel_id,
          created_by: userInfo?.created_by,
          web_site_id: userInfo?.web_site_id,
          currency_id: userInfo?.currency_id,
          is_updated_password: userInfo?.is_updated_password,
          email: userInfo?.email,
          phone_no: userInfo?.phone_no,
          photo: userInfo?.photo,
        };

        localStorage.setItem("user_data", encryptData(userData));

        localStorage.setItem("jwt_token", response?.token);
        localStorage.setItem("welcomeBonusId", userInfo?.promoId);

        setOpenSuccessNavPopup(true);

        setLoading(false);
        setFormData({
          title: title,
          name: "",
          lastName: "",
          user_name: "",
          password: "",
          confirmPassword: "",
          masterID: "",
          dob: "",
          country_id: "",
          currency_id: "",
          email: "",
          securityQuestions: [],
        });
        setActiveStatus(1);

        setMessage(response.message);

        handleApiError("");
        setApiErrors([]);
        setSelectedCountryItem("");
        setCountrydropdownOpen(false);
        setSelectedCurrencyItem("");
        setCurrencydropdownOpen(false);
        setCheckBoxes({
          age_agree: false,
          agree_policy: false,
        });
        setValidationErrors({
          name: "",
          lastName: "",
          user_name: "",
          password: "",
          confirmPassword: "",
          dob: "",
          country_id: "",
          currency_id: "",
          email: "",
          age_agree: false,
          agree_policy: false,
        });
        setActiveButton(1);
        setActiveStatus(1);
        showRegister(false);
      }
    } catch (error) {
      setLoading(false);
      const { validationErrors: newValidationErrors, apiErrors: newApiErrors } =
        handleApiError(error);

      if (newValidationErrors) {
        setValidationErrors(newValidationErrors);
      }
      if (newApiErrors) {
        setApiErrors(newApiErrors);
      }
    }
  };

  const handleClose = () => {
    handleApiError("");
    setApiErrors([]);
    setSelectedCountryItem("");
    setCountrydropdownOpen(false);
    setSelectedCurrencyItem("");
    setCurrencydropdownOpen(false);
    setCheckBoxes({
      age_agree: false,
      agree_policy: false,
    });
    setShowConfirmPassword(false);
    setShowPassword(false);
    setValidationErrors({
      name: "",
      lastName: "",
      user_name: "",
      password: "",
      confirmPassword: "",
      dob: "",
      country_id: "",
      currency_id: "",
      email: "",
      age_agree: false,
      agree_policy: false,
    });
    setFormData({
      title: title,
      name: "",
      lastName: "",
      user_name: "",
      password: "",
      confirmPassword: "",
      masterID: "",
      dob: "",
      country_id: "",
      currency_id: "",
      email: "",
      securityQuestions: [],
    });
    setUserError("");
    setActiveButton(1);
    showRegister(false);
    navigate("/");
  };

  const handleTerms = () => {
    setTermsPopup(true);
    showRegister(false);
    setLoginModal(false);
  };

  const handleOneClickSubmit = async () => {
    setApiErrors([]);
    if (
      !checkBoxes.age_agree === true ||
      !checkBoxes.agree_policy === true ||
      !formData.country_id ||
      !formData.currency_id
    ) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        age_agree: checkBoxes.age_agree ? "" : "Please confirm",
        agree_policy: checkBoxes.agree_policy
          ? ""
          : "Please accept terms and conditions",
        country_id: formData.country_id ? "" : "Country is required",
        currency_id: formData.currency_id ? "" : "Currency is required",
      }));
      return;
    }

    const data = {
      country_id: formData.country_id,
      currency_id: formData.currency_id,
      ref_id: formData.masterID,
    };

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== null && value !== undefined
      )
    );

    try {
      setLoading(true);
      const response = await oneClickSignup(filteredData);

      if (response.status === true) {
        const userInfo = response?.user;
        const userData = {
          userId: userInfo?.id,
          userName: userInfo?.userid,
          county_id: userInfo?.county_id,
          created_admin_panel_id: userInfo?.created_admin_panel_id,
          created_by: userInfo?.created_by,
          web_site_id: userInfo?.web_site_id,
          currency_id: userInfo?.currency_id,
          is_updated_password: userInfo?.is_updated_password,
          email: userInfo?.email,
          phone_no: userInfo?.phone_no,
          photo: userInfo?.photo,
        };

        localStorage.setItem("user_data", encryptData(userData));
        localStorage.setItem("jwt_token", response?.token);
        localStorage.setItem("welcomeBonusId", userInfo?.promoId);
        localStorage.setItem("password", response?.password);

        setLoading(false);
        setMessage(response.message);
        handleApiError("");
        setApiErrors([]);
        setSelectedCountryItem("");
        setCountrydropdownOpen(false);
        setSelectedCurrencyItem("");
        setCurrencydropdownOpen(false);
        setCheckBoxes({
          age_agree: false,
          agree_policy: false,
        });
        setValidationErrors({
          name: "",
          lastName: "",
          user_name: "",
          password: "",
          confirmPassword: "",
          dob: "",
          country_id: "",
          currency_id: "",
          email: "",
          age_agree: false,
          agree_policy: false,
        });
        setActiveButton(1);
        setActiveStatus(1);
        setRegistrationSuccessfull(true);
        showRegister(false);
      }
    } catch (error) {
      setLoading(false);
      const { validationErrors: newValidationErrors, apiErrors: newApiErrors } =
        handleApiError(error);

      if (newValidationErrors) {
        setValidationErrors(newValidationErrors);
      }

      if (newApiErrors) {
        setApiErrors(newApiErrors);
      }
    }
  };

  const handleBack = () => {
    setActiveStatus((prev) => prev - 1);
  };

  const handleButtonChange = (value) => {
    setActiveButton(value);
    setActiveStatus(1);
    setFormData({
      title: title,
      name: "",
      lastName: "",
      user_name: "",
      password: "",
      confirmPassword: "",
      masterID: "",
      dob: "",
      country_id: "",
      currency_id: "",
      email: "",
      securityQuestions: [],
    });
    setUserError("");
    setShowConfirmPassword(false);
    setShowPassword(false);
    handleApiError("");
    setApiErrors([]);
    setSelectedCountryItem("");
    setCountrydropdownOpen(false);
    setSelectedCurrencyItem("");
    setCurrencydropdownOpen(false);
    setCheckBoxes({
      age_agree: false,
      agree_policy: false,
    });
    setValidationErrors({
      name: "",
      lastName: "",
      user_name: "",
      password: "",
      confirmPassword: "",
      dob: "",
      country_id: "",
      currency_id: "",
      email: "",
      age_agree: false,
      agree_policy: false,
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.user_name && formData.user_name.length >= 5) {
        fetchUsername(formData.user_name);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.user_name]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCountrydropdownOpen(false);
        setCurrencydropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Modal
      show={showRegister}
      // onHide={handleCancel}
      centered
      // className="custom-login-modal"
    >
      <div className="d-flex flex-col blue-color4 py-2">
        <h3 className="flex-center">REGISTRATION</h3>
        
          <div className="d-flex items-center justify-items-center px-10">
            <button
              className="d-flex flex-between xbtn button-blue"
              onClick={() => setSelectedForm("register")}
            >
              <FaUserFriends className="me-2" />
              SIGN UP / REGISTER
            </button>

            <button
              className="d-flex flex-between xbtn grey-8-btn"
            >
              <FaBolt className="me-2" />
              ONE CLICK
            </button>
          </div>

          {apiErrors.length > 0 && (
            <div className="alert alert-danger">
              {apiErrors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          {selectedForm === "register" ? (
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.name ? "is-invalid" : ""
                    }`}
                  />
                  {validationErrors.name && (
                    <div className="invalid-feedback">
                      {validationErrors.name}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label>User Name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className={`form-control ${
                        validationErrors.user_name || userError
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {isUsernameLoading && (
                      <span className="input-group-text">...</span>
                    )}
                    {!isUsernameLoading &&
                      formData.user_name.length >= 5 &&
                      !userError && (
                        <span className="input-group-text text-success">
                          <FaCheck />
                        </span>
                      )}
                  </div>
                  {(validationErrors.user_name || userError) && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.user_name || userError}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`form-control ${
                        validationErrors.password ? "is-invalid" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                  </div>
                  {validationErrors.password && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.password}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label>Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`form-control ${
                        validationErrors.confirmPassword ? "is-invalid" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                  </div>
                  {validationErrors.confirmPassword && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Master/Parent ID (Optional)</label>
                  <input
                    type="text"
                    name="masterID"
                    value={formData.masterID}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Date of Birth</label>
                  <div className="input-group">
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className={`form-control ${
                        validationErrors.dob ? "is-invalid" : ""
                      }`}
                    />
                    <span className="input-group-text">
                      <FaCalendarAlt />
                    </span>
                  </div>
                  {validationErrors.dob && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.dob}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Country</label>
                  <select
                    name="country_id"
                    value={formData.country_id}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.country_id ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Country</option>
                    {/* Populate with actual countries */}
                  </select>
                  {validationErrors.country_id && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.country_id}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label>Currency</label>
                  <select
                    name="currency_id"
                    value={formData.currency_id}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.currency_id ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Currency</option>
                    {/* Populate with actual currencies */}
                  </select>
                  {validationErrors.currency_id && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.currency_id}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label>Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${
                    validationErrors.email ? "is-invalid" : ""
                  }`}
                />
                {validationErrors.email && (
                  <div className="invalid-feedback d-block">
                    {validationErrors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <h5>Security Questions</h5>
                {/* Render security questions here */}
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="form-check-label">
                  Yes, I am 18+ Years Old
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <label className="form-check-label">
                  I agree to the Terms and Conditions and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Registering..." : "REGISTER"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOneClickSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label>Country</label>
                  <select
                    name="country_id"
                    value={formData.country_id}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.country_id ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Country</option>
                    {/* Populate with actual countries */}
                  </select>
                  {validationErrors.country_id && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.country_id}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label>Currency</label>
                  <select
                    name="currency_id"
                    value={formData.currency_id}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.currency_id ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select Currency</option>
                    {/* Populate with actual currencies */}
                  </select>
                  {validationErrors.currency_id && (
                    <div className="invalid-feedback d-block">
                      {validationErrors.currency_id}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label>Master/Parent ID (Optional)</label>
                <input
                  type="text"
                  name="masterID"
                  value={formData.masterID}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="form-check-label">
                  Yes, I am 18+ Years Old
                </label>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <label className="form-check-label">
                  I agree to the Terms and Conditions and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Registering..." : "REGISTER"}
              </button>
            </form>
          )}

          <div className="mt-3 text-center">
            Already have an account? <a href="#">LOGIN</a>
          </div>
       
      </div>
    </Modal>
  );
};

export default Register;
