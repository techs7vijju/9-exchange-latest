import Modal from "react-bootstrap/Modal";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdContentCopy, MdFileDownload } from "react-icons/md";
import { PiCopyBold } from "react-icons/pi";
// import html2canvas from "html2canvas";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Images } from "../../../images/images";
import { decryptData } from "../../../utils/cryptoUtils";

function RegistrationSuccessfull({
  registrationSuccessfull,
  setRegistrationSuccessfull,
  getWelcome,
}) {
  const credentialsRef = useRef(null);
  const [copiedUserId, setCopiedUserId] = useState(false);
  const [copiedPassword, setOpiedPassword] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const getUserData = () => {
    const storedData = localStorage.getItem("user_data");
    return decryptData(storedData);
  };
  const userDetails = getUserData();
  const password = localStorage.getItem("password");
  useEffect(() => {
    getUserData();
  }, []);
  const handleClose = () => {
    localStorage.removeItem("password");
    setRegistrationSuccessfull(false);
    getWelcome();
  };

  const copyAllToClipboard = () => {
    const credentials = `"userId": "${
      userDetails?.userName || ""
    }"\n"password": "${password || ""}"`;

    navigator.clipboard
      .writeText(credentials)
      .then(() => {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy credentials: ", err);
      });
  };
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
        setOpiedPassword(true);
        setTimeout(() => setOpiedPassword(false), 1000);
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
        left: "-9999px",
        backgroundColor: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      });

      const logoImg = new Image();
      logoImg.src = Images.Logo1;
      logoImg.style.width = "180px";
      logoImg.style.marginBottom = "30px";
      logoImg.alt = "Company Logo";
      tempDiv.appendChild(logoImg);

      // Add credentials
      const credentialsDiv = document.createElement("div");
      Object.assign(credentialsDiv.style, {
        color: "#333",
        fontSize: "18px",
        lineHeight: "1.6",
        textAlign: "left",
        marginTop: "25px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
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

  return (
    <Modal
      show={registrationSuccessfull}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter z-index-max"
      centered
      size="lg"
    >
      <div className="login-image d-flex " style={{ position: "relative" }}>
        <IoClose
          className="font-1rem white-font cursor-pointer"
          style={{ position: "absolute", top: 6, right: 8 }}
          onClick={handleClose}
        />
        <img src={Images.Logo1} className="logoImg" />
        <div className="black-bg1 white-font px-4 py-1 m-2 mh-32 w-60 rounded">
          <div className="mt-5" ref={credentialsRef}>
            <div className="mt-2 mb-1 large-font fw-500">
              Registration Completed Successfully!
            </div>
            <div className="small-font mt-2">
              Don't forget to save your login and password!
            </div>

            <div className="d-flex justify-content-between align-items-center brown-bg p-2 rounded mt-3">
              <div>LOGIN</div>
              <div className="d-flex align-items-center">
                <span className="me-2">{userDetails?.userName}</span>

                {/* {copiedUserId ? (
                  <>
                    <PiCopyBold style={{ color: "#fbdf0066" }} />
                  </>
                ) : (
                  <PiCopyBold
                    style={{ cursor: "pointer" }}
                    onClick={copyIdToClipboard}
                    title="Copy Password"
                  />
                )} */}

                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderCopyTooltip(props, copiedUserId)}
                >
                  <span
                    className="cursor-pointer d-flex align-items-center ms-3"
                    style={{
                      background: "black",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                    onClick={copyIdToClipboard}
                  >
                    <MdContentCopy
                      className="me-1"
                      style={{ color: "white" }}
                    />
                  </span>
                </OverlayTrigger>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center brown-bg p-2 rounded mt-2">
              <div>PASSWORD</div>
              <div className="d-flex align-items-center">
                <span className="me-2">{password}</span>
                {/* {copiedPassword ? (
                  <>
                    <PiCopyBold style={{ color: "#fbdf0066" }} />
                  </>
                ) : (
                  <PiCopyBold
                    style={{ cursor: "pointer" }}
                    onClick={copyPasswordToClipboard}
                    title="Copy Password"
                  />
                )} */}

                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => renderCopyTooltip(props, copiedPassword)}
                >
                  <span
                    className="cursor-pointer d-flex align-items-center ms-3"
                    style={{
                      background: "black",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                    onClick={copyPasswordToClipboard}
                  >
                    <MdContentCopy
                      className="me-1"
                      style={{ color: "white" }}
                    />
                  </span>
                </OverlayTrigger>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex align-items-center mt-3">
              <button
                className={`${
                  downloading ? "yellow-bg2" : "yellow-bg"
                } black-font1 p-2 d-flex justify-content-center align-items-center w-70 rounded border-0`}
                onClick={downloadAsImage}
              >
                {downloading ? (
                  <div className="d-flex flex-center gap-2 align-items-center disabled-btn">
                    <span className="white-font">DOWNLOADING</span>
                    <div className="loader" />
                  </div>
                ) : (
                  <div className="d-flex flex-center gap-2 align-items-center fw-500">
                    <MdFileDownload className="black-font1" />
                    <span className="black-font1">DOWNLOAD AS IMAGE</span>
                  </div>
                )}
              </button>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderCopyTooltip(props, copiedAll)}
              >
                <button
                  className={`black-font1 p-2 text-center mx-2 w-30 rounded border-0 ${
                    copiedAll ? "yellow-bg2" : "bg-white"
                  }`}
                  onClick={copyAllToClipboard}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MdContentCopy
                    className="me-1"
                    style={{ fontSize: "1.2rem" }}
                  />
                </button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default RegistrationSuccessfull;
