import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
import { useMediaQuery } from "react-responsive";
import { decryptData } from "../../utils/cryptoUtils";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import html2canvas from "html2canvas";
import { FaCopy } from "react-icons/fa";
import { getWelcomeBonusAvail } from "../../api/apiMethods";
import { useNavigate } from "react-router";
import { imgUrl } from "../../api/baseUrl";

const ThanksSignup = ({ showThanksSignup, setShowThanksSignup }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const credentialsRef = useRef(null);

  const getUserData = () => {
    const storedData = localStorage.getItem("user_data");
    return decryptData(storedData);
  };

  const userDetails = getUserData();
  const password = localStorage.getItem("password");
  const welcomeBonusId = localStorage.getItem("welcomeBonusId");

  useEffect(() => {
    getUserData();
  }, []);

  const [welcomeData, setWelcomeData] = useState({});
  const hasFetched = useRef(false);

  const image = welcomeData?.image;
  const image_comp = welcomeData?.image_comp;

  useEffect(() => {
    const welcomeId = localStorage.getItem("welcomeBonusId");
    if (!welcomeId || welcomeId === null) return;
    const getWelcomeBonus = async () => {
      try {
        const response = await getWelcomeBonusAvail(welcomeId);
        if (response.status === 200) {
          setWelcomeData(response?.welcomeBonous[0] || {});
        }
      } catch (error) {}
    };
    getWelcomeBonus();
  }, [showThanksSignup]);

  // useEffect(() => {
  //   if (hasFetched.current) return;
  //   if (showThanksSignup === true) {
  //     hasFetched.current = true;
  //     getWelcomeBonus();
  //   }
  // }, [showThanksSignup]);

  const handleClose = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("welcomeBonusId");
    setWelcomeData({});
    setShowThanksSignup(false);
    navigate("/");
  };

  return (
    <Modal
      show={showThanksSignup}
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

        <h5 className="model-label pt-3">Thank You for Registering!</h5>
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

      <div
        className={
          isMobile
            ? "d-flex flex-col gap-3 p-3"
            : "d-flex justify-content-between align-items-center gap-3 p-3"
        }
      >
        {(!welcomeData || !Object.keys(welcomeData).length) && (
          <div className="d-flex flex-col w-100 gap-3">
            <div className="d-flex flex-center p-black py-5">
              Registration Successful
            </div>
            <button className="xbtn button-blue" onClick={handleClose}>
              GO TO HOME
            </button>
          </div>
        )}

        {welcomeData && Object.keys(welcomeData).length > 0 && (
          <div className="w-100 d-flex flex-center flex-col">
            {image ? (
              <img
                className="w-100"
                src={`${imgUrl}/PromotionCards/${image}`}
                alt=""
              />
            ) : image_comp ? (
              <img
                className="w-100"
                src={`${imgUrl}/promotions/${image_comp}`}
                alt=""
              />
            ) : (
              <img className="w-100" src={Images.bonus} alt="" />
            )}
            <h3 className="h3-blue fw-600">{welcomeData?.bones_amount}</h3>
            {welcomeData?.status === 2 ? (
              <div className=" mt-2 copy-text">
                Welcome Bonus Added Successfully
              </div>
            ) : (
              <div className="mt-2 copy-text">
                Welcome Bonus Will Be Added Soon
              </div>
            )}
            <div className="mt-3 border-red copy-value text-center">
              <p className="p-red">This is valid only for 30 days</p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ThanksSignup;
