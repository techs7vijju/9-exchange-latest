import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images/images";
import { useMediaQuery } from "react-responsive";
import { decryptData } from "../../utils/cryptoUtils";
import { MdContentCopy, MdFileDownload } from "react-icons/md";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaCopy } from "react-icons/fa";
import { getWelcomeBonusAvail } from "../../api/apiMethods";

const Thanks = ({ showThanks, setShowThanks }) => {
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const credentialsRef = useRef(null);
  const [copiedUserId, setCopiedUserId] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [downloading, setDownloading] = useState(false);

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

  const copyIdToClipboard = () => {
    navigator.clipboard
      .writeText(userDetails?.userName || "")
      .then(() => {
        setCopiedUserId(true);
        setTimeout(() => setCopiedUserId(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy ID: ", err);
      });
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard
      .writeText(password || "")
      .then(() => {
        setCopiedPassword(true);
        setTimeout(() => setCopiedPassword(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  };

  const downloadAsImage = async () => {
    if (!credentialsRef.current) return;

    try {
      setDownloading(true);

      const tempDiv = document.createElement("div");
      Object.assign(tempDiv.style, {
        position: "absolute",
        backgroundColor: "#205583",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      });

      const logoImg = new Image();
      logoImg.src = Images.Logo;
      logoImg.style.width = "180px";
      logoImg.style.marginBottom = "30px";
      logoImg.alt = "Company Logo";
      tempDiv.appendChild(logoImg);

      const credentialsDiv = document.createElement("div");
      Object.assign(credentialsDiv.style, {
        color: "#333",
        fontSize: "18px",
        lineHeight: "1.6",
        textAlign: "left",
        marginTop: "25px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "6px",
      });

      credentialsDiv.innerHTML = `
        <div style="margin-bottom: 15px;">
          <strong style="display: inline-block; width: 100px;">Username:</strong>
          <span>${userDetails?.userName || "N/A"}</span>
        </div>
        <div>
          <strong style="display: inline-block; width: 100px;">Password:</strong>
          <span>${password || "N/A"}</span>
        </div>
      `;

      tempDiv.appendChild(credentialsDiv);
      document.body.appendChild(tempDiv);

      await new Promise((resolve) => {
        logoImg.onload = resolve;
        logoImg.onerror = resolve;
      });

      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `credentials_${new Date()
        .toISOString()
        .slice(0, 10)}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Failed to generate image:", error);
    } finally {
      const tempDiv = document.querySelector('div[style*="left: -9999px"]');
      if (tempDiv) document.body.removeChild(tempDiv);
      setDownloading(false);
    }
  };

  const renderCopyTooltip = (props, copiedState) => (
    <Tooltip id="button-tooltip" {...props}>
      {copiedState ? "Copied!" : "Copy"}
    </Tooltip>
  );

  // welcome Bonus

  const [welcomeData, setWelcomeData] = useState({});
  const hasFetched = useRef(false);

  console.log("welcomeData", welcomeData);

  const getWelcomeBonus = async () => {
    const welcomeId = localStorage.getItem("welcomeBonusId");
    if (!welcomeId) return;
    try {
      const response = await getWelcomeBonusAvail(welcomeId);
      if (response.status === 200) {
        setWelcomeData(response?.welcomeBonous[0]);
      }
    } catch (error) {}
  };

  const image = welcomeData?.image;
  const image_comp = welcomeData?.image_comp;

  useEffect(() => {
    if (hasFetched.current) return;
    if (showThanks === true) {
      hasFetched.current = true;
      getWelcomeBonus();
    }
  }, [showThanks]);

  const handleClose = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("welcomeBonusId");
    setShowThanks(false);
  };

  return (
    <Modal
      show={showThanks}
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
          Remember to
          <span className="p-blue1 pointer" onClick={downloadAsImage}>
            download
          </span>
          your
          <span className="p-blue1 pointer" onClick={copyIdToClipboard}>
            username
          </span>
          and
          <span className="p-blue1 pointer" onClick={copyPasswordToClipboard}>
            password
          </span>
          .
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
          <div className="border-blue" ref={credentialsRef}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="row">
                <div className="copy-text">User Name</div>
                <div className="copy-value">{userDetails?.userName}</div>
              </div>
              <div className="copy-icon">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderCopyTooltip(props, copiedUserId)}
                  onClick={copyIdToClipboard}
                >
                  <span className="pointer" onClick={copyIdToClipboard}>
                    <FaCopy />
                  </span>
                </OverlayTrigger>
              </div>
            </div>

            <div className="custom-line custom-line-grey-color"></div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="row">
                <div className="copy-text">Password</div>
                <div className="copy-value">{password}</div>
              </div>
              <div className="copy-icon">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderCopyTooltip(props, copiedPassword)}
                >
                  <span
                    className="cursor-pointer "
                    onClick={copyPasswordToClipboard}
                  >
                    <FaCopy />
                  </span>
                </OverlayTrigger>
              </div>
            </div>
          </div>

          <button
            disabled={downloading}
            className="xbtn button-green2"
            onClick={downloadAsImage}
          >
            {downloading && (
              <span className="spinner-border spinner-border-sm me-2"></span>
            )}
            {downloading ? "Downloading..." : "Download as Image"}
          </button>
        </div>

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
            <div className="large-font fw-600">{welcomeData?.bones_amount}</div>
            {welcomeData?.status === 2 ? (
              <div className="copy-text">Welcome Bonus Added Successfully</div>
            ) : (
              <div className="copy-text">Welcome Bonus Will Be Added Soon</div>
            )}
            <div className="border-blue copy-value">
              <span>This is valid only for 30 days</span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Thanks;
