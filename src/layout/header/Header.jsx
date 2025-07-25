import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { useMediaQuery } from "react-responsive";
import { Images } from "../../images/images";
import Login from "../../pages/Popups/Login";
import ForgotPassword from "../../pages/Popups/ForgotPassword";
import NewPassword from "../../pages/Popups/NewPassword";
import Success from "../../pages/Popups/Success";
import Blocked from "../../pages/Popups/Blocked";
import Register from "../../pages/Popups/Register";
import Thanks from "../../pages/Popups/Thanks";
import DropdownMenu from "../../components/common/DropdownMenu";
import ThanksSignup from "../../pages/Popups/ThanksSignup";

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
  const [welcomeBonusPopup, setWelcomeBonusPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  const [openSports, setOpenSports] = useState(false);
  const [openLive, setOpenLive] = useState(false);
  const [openCasino, setOpenCasino] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openEn, setOpenEn] = useState(false);

  const [showMessages, setShowMessages] = useState(false);

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
  };
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showBlocked, setShowBlocked] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [showThanksSignup, setShowThanksSignup] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleRegister = () => {
    setShowRegister(true);
  };

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

  const sportsItems = [
    { img: Images.bat, name: "Cricket" },
    { img: Images.ball, name: "Football" },
    { img: Images.tennis, name: "Tennis" },
    { img: Images.horse, name: "Horse Racing" },
    { img: Images.grey, name: "Greyhound" },
    { img: Images.baseball, name: "Baseball" },
  ];
  const liveItems = [
    { name: "Cricket Live" },
    { name: "Football Live" },
    { name: "Tennis Live" },
    { name: "Horse Racing Live" },
    { name: "Greyhound Live" },
    { name: "Baseball Live" },
  ];

  const moreItems = [
    { img: Images.bets, name: <div onClick={() => navigate("/my-bets")}>My Bets</div> },
    { img: Images.wallet, name: "My Wallet" },
    { img: Images.tickets, name: "Tickets" },
    { img: Images.account, name: "Account Statement" },
    { img: Images.pl, name: "P/L Statement" },
    { img: Images.account, name: "commission Report" },
    { img: Images.set, name: "Set Button Variables" },
  ];
  const EnItems = [{ name: "English" }, { name: "Spanish" }];
  return (
    <div className="header flex items-center">
      {isMobile ? (
        <div className="w-100 flex justify-between items-center px-2">
          <div>
            <img src={Images.Logo} alt="logo" className="logo-img w-100" />
          </div>

          <div>
            {isLogin ? (
              <>
                <div className="flex-evenly gap-2 mx-2">
                  <div className="d-flex flex-start">
                    <div>
                      BALANCE
                      <br />
                      1000000
                    </div>
                  </div>
                </div>
                <div className="xbtn green-color pointer ">Deposit</div>
                <div className="xbtn login pointer">
                  <img src={Images.personal} className="payment-images" />
                </div>
              </>
            ) : (
              <div className="d-flex gap-2">
                <div className="xbtn button-blue w-60" onClick={handleRegister}>
                  REGISTRATION
                </div>
                <div className="xbtn login w-40" onClick={handleLoginClick}>
                  LOGIN
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-100 flex justify-between items-center px-2">
          <div className="flex align-items-center">
            <div className="">
              <img src={Images.Logo} alt="logo" className="logo-img w-100" />
            </div>
            <div>
              {" "}
              <DropdownMenu
                title="CRICKET"
                open={false}
                onToggle={() => {}}
                items={[]}
                showImages={false}
              />
            </div>
            <div>
              <DropdownMenu
                title="SPORTS"
                open={openSports}
                onToggle={() => setOpenSports(!openSports)}
                items={sportsItems}
              />
            </div>
            <div>
              <DropdownMenu
                title="LIVE"
                open={openLive}
                onToggle={() => setOpenLive(!openLive)}
                items={liveItems}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="dropdown-container"
                style={{ position: "relative" }}
              >
                <button
                  className="dropdown-header"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={openCasino}
                  onClick={() => setOpenCasino(!openCasino)}
                >
                  <span className="large-font">CASINO</span>
                  {openCasino ? (
                    <IoChevronUpSharp className="ms-1 xl-large-font" />
                  ) : (
                    <IoChevronDownSharp className="ms-1 xl-large-font" />
                  )}
                </button>
                {openCasino && (
                  <div className="casino-dropdown-menu" role="listbox">
                    <div
                      className="row gx-1 gy-1 px-2 casino-grid"
                      onMouseEnter={() => setOpenCasino(true)}
                      onMouseLeave={() => setOpenCasino(false)}
                    >
                      {imagePaths.map((path, index) => (
                        <div className="col-4" key={index}>
                          <div className="casino-img-container">
                            <div className="">
                              <img
                                src={path}
                                className="casino-images"
                                alt={`casino-logo-${index}`}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <DropdownMenu
                title="MORE"
                open={openMore}
                onToggle={() => setOpenMore(!openMore)}
                items={moreItems}
              />
            </div>
          </div>

          <div className="flex justify-content-between align-items-center">
            <div className="flex w-100">
              {isLogin ? (
                <div className="d-flex flex-between w-100 gap-1">
                  <div className="xbtn green-color large-font w-50 pointer ">
                    Make A Deposit
                  </div>
                  <div className="d-flex flex-between w-50 gap-1">
                    <div
                      className="d-flex flex-between xbtn login white-font pointer"
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
                <div className="d-flex flex-between gap-3 w-100">
                  <div className="registration-container">
                    <div
                      className="xbtn button-blue large-font w-100"
                      onClick={handleRegister}
                    >
                      REGISTRATION
                    </div>
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
            <div className="flex">
              {isLogin && (
                <>
                  <div className="flex-evenly gap-3 white-font large-font mx-2">
                    <div className="d-flex flex-end">
                      <div style={{ textAlign: "right" }}>
                        Sports Bal:{" "}
                        <span className="green-clr fw-600">1000</span>
                        <br />
                        Exp: <span className="green-clr fw-600">1000</span>
                      </div>
                    </div>
                  </div>
                  <span>|</span>
                  <div className="flex-evenly gap-3 white-font large-font mx-2">
                    <div className="d-flex flex-end">
                      <div style={{ textAlign: "right" }}>
                        Casino Bal:{" "}
                        <span className="green-clr fw-600">1000</span>
                        <br />
                        Exp: <span className="green-clr fw-600">1000</span>
                      </div>
                    </div>
                  </div>
                  <span>|</span>
                </>
              )}
              <div className="d-flex flex-end w-40">
                <DropdownMenu
                  title="ENG"
                  open={openEn}
                  onToggle={() => setOpenEn(!openEn)}
                  items={EnItems}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Register
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowThanks={setShowThanks}
        setShowThanksSignup={setShowThanksSignup}
        setMessage={setMessage}
        setShowSuccess={setShowSuccess}
        setShowLogin={setShowLogin}
      />
      <Thanks showThanks={showThanks} setShowThanks={setShowThanks} />
      <ThanksSignup
        showThanksSignup={showThanksSignup}
        setShowThanksSignup={setShowThanksSignup}
      />
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
