import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlineChat } from "react-icons/md";
import { ImExit } from "react-icons/im";
// import MessagePopup from "../pages/popup/MessagePopup";
// import Registration from "../pages/registration/Registration";
// import Login from "../pages/popup/login/Login";
// import "./styles.css";
// import "./common.css";
// import { getWalletDetails } from "../api/apiMethods";
// import handleError from "../utils/errorHandler";
// import socketService from "../utils/socketService";
import { useMediaQuery } from "react-responsive";
import { Images } from "../../images/images";
import Login from "../../pages/banner/Popups/Login";
import ForgotPassword from "../../pages/banner/Popups/ForgotPassword";
import NewPassword from "../../pages/banner/Popups/NewPassword";
import Success from "../../pages/banner/Popups/Success";
import Blocked from "../../pages/banner/Popups/Blocked";
import Register from "../../pages/banner/Popups/Register";
import Thanks from "../../pages/banner/Popups/Thanks";
import RegistrationSuccessfull from "../../pages/banner/Popups/RegistrationSuccessfull";

function Header({ userData, setUserData, openOneClick, setOpenClick }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  // const isLogin = localStorage.getItem("login");

  const [openSign, setOpenSign] = useState(false);
  const [walletDetails, setWalletDetails] = useState(null);

  const [error, setError] = useState({});
  const [message, setMessage] = useState("");

  // popups
  const [showMsgPopup, setShowMsgPopup] = useState(false);
  const [registrationSuccessfull, setRegistrationSuccessfull] = useState(false);
  const [welcomeBonusPopup, setWelcomeBonusPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  const [openSports, setOpenSports] = useState(false);
  const [openLive, setOpenLive] = useState(false);
  const [openCasino, setOpenCasino] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openEn, setOpenEn] = useState(false);

  const handleToggle = (dropdown) => {
    setOpenSports(dropdown === "sports" ? !openSports : false);
    setOpenLive(dropdown === "live" ? !openLive : false);
    setOpenCasino(dropdown === "casino" ? !openCasino : false);
    setOpenMore(dropdown === "more" ? !openMore : false);
    setOpenEn(dropdown === "en" ? !openEn : false);
  };

  const [showMessages, setShowMessages] = useState(false);

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
  };
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showBlocked, setShowBlocked] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleRegister = () => {
    setShowRegister(true);
  };

  const getWelcomeBonus = async () => {
    const welcomeId = localStorage.getItem("welcomeBonusId");

    if (!welcomeId || welcomeId === "undefined" || welcomeId === "null") {
      return <Navigate to="/" />;
    }
    setWelcomeBonusPopup(true);
  };

  //   const handleNavigate = () => {
  //     navigate("/casino");
  //   };

  //   const handleOpenLiveMatches = (game) => {
  //     navigate(`/live-matches/${game}`);
  //   };

  //   const handleLogout = () => {
  //     localStorage.clear();
  //     navigate("/home", { replace: true });
  //     window.location.reload();
  //   };

  const imagePaths = [
    Images.ezugicasino,
    Images.img2,
    Images.img3,
    Images.img4,
    Images.img5,
    Images.img6,
    Images.img7,
    Images.img8,
    Images.img9,
    Images.img10,
    Images.img11,
    Images.img12,
    Images.img13,
    Images.img14,
    Images.img15,
    Images.img16,
    Images.img17,
    Images.img18,
    Images.img19,
    Images.img20,
    Images.img21,
    Images.img22,
    Images.img23,
    Images.img24,
  ];

  //   useEffect(() => {
  //     const fetchUserWalletDetails = async () => {
  //       try {
  //         const response = await getWalletDetails();
  //         if (response?.records) {
  //           const res = Array.isArray(response.records)
  //             ? response.records[0]
  //             : response.records;
  //           setWalletDetails({ ...res });
  //         } else {
  //           setError(["Something went wrong"]);
  //         }
  //       } catch (err) {
  //         handleError(err, setError);
  //       }
  //     };
  //     fetchUserWalletDetails();
  //   }, []);
  //   const balanceAmount = useMemo(() => {
  //     return (
  //       (Number(walletDetails?.avil_chips) || 0) +
  //       (Number(walletDetails?.netpl) || 0) -
  //       (Number(walletDetails?.exposer) || 0)
  //     );
  //   }, [walletDetails]);

  //   const handleFancyExposer = useCallback(
  //     (data) => {
  //       if (userData?.userId && Number(userData.userId) === Number(data.userId)) {
  //         setWalletDetails((prev) => ({
  //           ...prev,
  //           exposer: (Number(prev.exposer) || 0) + Number(data.exposer),
  //         }));
  //       }
  //     },
  //     [userData?.userId]
  //   );

  //   const handleOddsExposer = useCallback(
  //     (data) => {
  //       if (userData?.userId && Number(userData.userId) === Number(data.userId)) {
  //         setWalletDetails((prev) => ({
  //           ...prev,
  //           exposer: Number(data.exposer),
  //         }));
  //       }
  //     },
  //     [userData?.userId]
  //   );

  //   useEffect(() => {
  //     socketService.on("fancyExposer", handleFancyExposer);
  //     return () => socketService.off("fancyExposer", handleFancyExposer);
  //   }, [handleFancyExposer]);

  //   useEffect(() => {
  //     socketService.on("oddsExposer", handleOddsExposer);
  //     return () => socketService.off("oddsExposer", handleOddsExposer);
  //   }, [handleOddsExposer]);
  const notificationData = [
    {
      image: Images.profile1,
      text: "Hello Jayanta! Saw your design work and its pret...",
      date: "Nov 14, 2023",
      name: "Mandvi Dixit",
    },
    {
      image: Images.pro2,
      text: "Hello Jayanta! Saw your design work and its pret...",
      date: "Nov 14, 2023",
      name: "Mandvi Dixit",
    },
    {
      image: Images.pro3,
      text: "Hello Jayanta! Saw your design work and its pret...",
      date: "Nov 14, 2023",
      name: "Mandvi Dixit",
    },
  ];

  return (
    <div className="header">
      {isMobile ? (
        <div className="flex-between w-100">
          <div>
            <img src={Images.Logo} alt="logo" className="logo-img w-100" />
          </div>

          <div className="flex-evenly gap-2 mx-2">
            {isLogin ? (
              <>
                <div className="flex-evenly gap-3 white-font large-font mx-2">
                  <div className="d-flex flex-start">
                    <div>
                      BALANCE
                      <br />
                      1000000
                    </div>
                  </div>
                </div>
                <div className="xbtn green-color large-font white-font pointer ">
                  Deposit
                </div>
                <div className="xbtn login large-font white-font pointer">
                  <img src={Images.personal} className="payment-images" />
                </div>
              </>
            ) : (
              <div className="d-flex flex-between gap-1 w-100">
                <div
                  className="xbtn button-blue large-font w-60"
                  onClick={handleRegister}
                >
                  REGISTRATION
                </div>
                <div
                  className="xbtn login large-font w-40"
                  onClick={handleLoginClick}
                >
                  LOGIN
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-between w-100">
          <div className="flex-evenly w-10">
            <img src={Images.Logo} alt="logo" className="logo-img w-100" />
          </div>

          <div className="flex-evenly w-40">
            <Dropdown>
              <Dropdown.Toggle className="d-flex flex-between custom-dropdown pointer w-100">
                <span className="large-font">CRICKET</span>
              </Dropdown.Toggle>
            </Dropdown>

            <Dropdown show={openSports} onToggle={() => handleToggle("sports")}>
              <Dropdown.Toggle className="d-flex justify-content-between align-items-center custom-dropdown pointer w-100">
                <span className="large-font">SPORTS</span>
                {openSports ? (
                  <IoChevronUpSharp className="ms-1 xl-large-font" />
                ) : (
                  <IoChevronDownSharp className="ms-1 xl-large-font" />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown1">
                {[
                  { img: Images.bat, name: "Cricket" },
                  { img: Images.ball, name: "Football" },
                  { img: Images.tennis, name: "Tennis" },
                  { img: Images.horse, name: "Horse Racing" },
                  { img: Images.grey, name: "Greyhound" },
                  { img: Images.baseball, name: "Baseball" },
                ].map((item, index) => (
                  <Dropdown.Item key={index} className="dropdown-item-custom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="dropdown-content">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="dropdown-icon"
                        />
                        <span className="dropdown-label">{item.name}</span>
                      </div>
                      <FaChevronRight className="dropdown-arrow" />
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown show={openLive} onToggle={() => handleToggle("live")}>
              <Dropdown.Toggle className="d-flex flex-between custom-dropdown pointer ">
                <span className="large-font">LIVE</span>
                {openLive ? (
                  <IoChevronUpSharp className="ms-1 xl-large-font" />
                ) : (
                  <IoChevronDownSharp className="ms-1 xl-large-font" />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu className="casino-dropdown-menu1 large-font">
                <Dropdown.Item
                //   onClick={() => handleOpenLiveMatches("cricket")}
                >
                  <div className="d-flex justify-content-between border-bottom-grey">
                    Cricket Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                //   onClick={() => handleOpenLiveMatches("football")}
                >
                  <div className="d-flex justify-content-between border-bottom-grey">
                    Football Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                //   onClick={() => handleOpenLiveMatches("tennis")}
                >
                  <div className="d-flex justify-content-between border-bottom-grey">
                    Tennis Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                //   onClick={() => handleOpenLiveMatches("horse")}
                >
                  <div className="d-flex justify-content-between border-bottom-grey">
                    Horse Racing Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                // onClick={() => handleOpenLiveMatches("grey-hound")}
                >
                  <div className="d-flex justify-content-between border-bottom-grey">
                    GreyHound Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                //   onClick={() => handleOpenLiveMatches("kabaddi")}
                >
                  <div className="d-flex justify-content-between">
                    Kabaddi Live
                    <FaChevronRight className=" my-1 arow-clr" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="d-flex justify-content-center">
              <Dropdown
                show={openCasino}
                onToggle={() => handleToggle("casino")}
              >
                <Dropdown.Toggle className="d-flex flex-between custom-dropdown pointer">
                  <span className="large-font">CASINO</span>
                  {openCasino ? (
                    <IoChevronUpSharp className="ms-1 xl-large-font" />
                  ) : (
                    <IoChevronDownSharp className="ms-1 xl-large-font" />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu className="casino-dropdown-menu large-font">
                  <div
                    className="row gx-2 gy-2 px-3 py-2 casino-grid"
                    onMouseEnter={() => setOpenCasino(true)}
                    onMouseLeave={() => setOpenCasino(false)}
                  >
                    {imagePaths.map((path, index) => (
                      <div className="col-4" key={index}>
                        <div className="container-bg">
                          <img
                            src={path}
                            className="casino-images"
                            alt={`casino-logo-${index}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Dropdown show={openMore} onToggle={() => handleToggle("more")}>
              <Dropdown.Toggle className="d-flex flex-between custom-dropdown pointer">
                <span className="large-font">MORE</span>
                {openMore ? (
                  <IoChevronUpSharp className="ms-1 xl-large-font" />
                ) : (
                  <IoChevronDownSharp className="ms-1 xl-large-font" />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown1 large-font">
                <Dropdown.Item
                  className="ps-0 pe-2"
                  // onClick={() => navigate("/my-bets")}
                  onMouseEnter={() => setOpenCasino(true)}
                  onMouseLeave={() => setOpenCasino(false)}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.bets}
                        className="mx-2 icon"
                        alt="My Bets"
                      />
                      My Bets
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  className="ps-0 pb-2 pe-2"
                  // onClick={() => navigate("/my-wallet")}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.Wallet}
                        className="mx-2 icon"
                        alt="My Wallet"
                      />
                      My Wallet
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  className="ps-0 pb-2 pe-2"
                  // onClick={() => navigate("/tickets")}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.tickets}
                        className="mx-2 icon"
                        alt="Tickets"
                      />
                      Tickets
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  className="ps-0 pb-2 pe-2"
                  // onClick={() => navigate("/account-statement")}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.account}
                        className="mx-2 icon"
                        alt="Account Statement"
                      />
                      Financial Overview
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  className="ps-0 pb-2 pe-2"
                  // onClick={() => navigate("/pl-statement")}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.pl}
                        className="mx-2 icon"
                        alt="P/L Statement"
                      />
                      P/L Statement
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                {/* <Dropdown.Item
                className="ps-0 pb-2 pe-2"
                onClick={() => navigate("/commission-report")}
              >
                <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                  <div>
                    <img
                      src={Images.Logo}
                      className="mx-2 icon"
                      alt="Commission Report"
                    />
                    Commission Report
                  </div>
                  <FaChevronRight className=" arow-clr" />
                </div>
              </Dropdown.Item> */}

                <Dropdown.Item
                  className="ps-0 p-1 pe-2"
                  // onClick={() => navigate("/set-button-variables")}
                >
                  <div className="d-flex justify-content-between align-items-center p-1 border-bottom-grey">
                    <div>
                      <img
                        src={Images.set}
                        className="mx-2 icon"
                        alt="Set Button Variables"
                      />
                      Set Button Variables
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  className="ps-0 pe-2"
                  // onClick={() => navigate("/promotions")}
                >
                  <div className="d-flex justify-content-between p-1 align-items-center">
                    <div>
                      <img
                        src={Images.set}
                        className="mx-2 icon"
                        alt="Promotions"
                      />
                      Promotions
                    </div>
                    <FaChevronRight className=" arow-clr" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="flex-evenly w-30 p-2">
            {isLogin ? (
              <div className="d-flex flex-between w-100 gap-1">
                <div className="xbtn green-color large-font w-50 pointer ">
                  Make A Deposit
                </div>
                <div className="d-flex flex-between w-50 gap-1">
                  <div
                    className="d-flex flex-between xbtn login white-font pointer "
                    onClick={toggleMessages}
                  >
                    <MdOutlineChat />

                    {showMessages && (
                      <div className="message-dropdown shadow rounded">
                        <div className="dropdown-arrow-up" />
                        <div className="fw-bold px-3 pt-3 pb-2 text-primary border-bottom">
                          Your Messsages
                        </div>

                        {notificationData.map((item, i) => (
                          <div
                            className="d-flex align-items-start px-3 py-3 border-bottom"
                            key={i}
                          >
                            <img
                              src={item.image}
                              alt="avatar"
                              className="avatar-img me-2"
                            />
                            <div className="flex-grow-1">
                              <div className="fw-bold small mb-1 text-dark">
                                {item.name}
                              </div>
                              <div className="small text-body ">
                                {item.text}
                              </div>
                            </div>
                            <div className="text-muted small ms-2 mt-1 white-space-nowrap">
                              {item.date}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-between  xbtn login white-font pointer">
                    <ImExit />
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-between gap-1 w-100">
                <div
                  className="xbtn button-blue large-font w-60"
                  onClick={handleRegister}
                >
                  REGISTRATION
                </div>
                <div
                  className="xbtn login large-font w-40"
                  onClick={handleLoginClick}
                >
                  LOGIN
                </div>
              </div>
            )}
          </div>

          <div className="flex-evenly w-20 gap-2 white-font large-font mx-2">
            {isLogin && (
              <>
                <div className="flex-evenly gap-3 white-font large-font mx-2">
                  <div className="d-flex flex-end">
                    <div style={{ textAlign: "right" }}>
                      Sports Bal:{" "}
                      <span className="green-clr fw-600">
                        {/* {Number(balanceAmount || 0).toFixed(2)} */}
                        1000
                      </span>
                      <br />
                      Exp:{" "}
                      <span className="green-clr fw-600">
                        {/* {Number(walletDetails?.exposer || 0).toFixed(2)} */}
                        1000
                      </span>
                    </div>
                  </div>
                </div>
                <span>|</span>
                <div className="flex-evenly gap-3 white-font large-font mx-2">
                  <div className="d-flex flex-end">
                    <div style={{ textAlign: "right" }}>
                      Casino Bal:{" "}
                      <span className="green-clr fw-600">
                        {/* {Number(balanceAmount || 0).toFixed(2)} */}
                        1000
                      </span>
                      <br />
                      Exp:{" "}
                      <span className="green-clr fw-600">
                        {/* {Number(walletDetails?.exposer || 0).toFixed(2)} */}
                        1000
                      </span>
                    </div>
                  </div>
                </div>
                <span>|</span>
              </>
            )}

            <div className="d-flex flex-end w-40">
              <Dropdown show={openEn} onToggle={() => handleToggle("en")}>
                <Dropdown.Toggle className="d-flex flex-between custom-dropdown pointer">
                  <span className="large-font">EN</span>
                  {openEn ? (
                    <IoChevronUpSharp className="ms-1 xl-large-font" />
                  ) : (
                    <IoChevronDownSharp className="ms-1 xl-large-font" />
                  )}
                </Dropdown.Toggle>
                {/* <Dropdown.Menu className="custom-dropdown large-font"> */}
              </Dropdown>
            </div>
          </div>
        </div>
      )}

      <Register
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowThanks={setShowThanks}
        setMessage={setMessage}
        setRegistrationSuccessfull={setRegistrationSuccessfull}
        setShowSuccess={setShowSuccess}
      />
      <RegistrationSuccessfull
        registrationSuccessfull={registrationSuccessfull}
        setRegistrationSuccessfull={setRegistrationSuccessfull}
        getWelcome={getWelcomeBonus}
      />
      <LoginPopup
        setLoginModal={setLoginPopup}
        loginModal={loginPopup}
        setRegisterModal={setRegisterpopup}
        registerModal={registerpopup}
        setForgotPasswordModal={setForgotPasswordModal}
        setAdminResetPopup={setAdminResetPopup}
        adminResetPopup={adminResetPopup}
      />
      <Thanks showThanks={showThanks} setShowThanks={setShowThanks} />
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowForgot={setShowForgot}
      />
      <ForgotPassword
        showForgot={showForgot}
        setShowForgot={setShowForgot}
        setShowNewPassword={setShowNewPassword}
      />
      <NewPassword
        showNewPassword={showNewPassword}
        setShowNewPassword={setShowNewPassword}
        setShowSuccess={setShowSuccess}
      />
      <Success
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        setShowBlocked={setShowBlocked}
      />
      <Blocked showBlocked={showBlocked} setShowBlocked={setShowBlocked} />
    </div>
  );
}

export default Header;
