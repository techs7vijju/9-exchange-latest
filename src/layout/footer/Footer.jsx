import React, { useState } from "react";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { PiWindowsLogoFill } from "react-icons/pi";
import { Images } from "../../images/images";
import { useMediaQuery } from "react-responsive";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { Carousel, Col, Row } from "react-bootstrap";
import DropdownMenu from "../../components/common/DropdownMenu";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleFooter = () => {
    setIsOpen((prev) => !prev);
  };

  const paymentOptions = [
    [
      { icon: "/assets/footer/payment-1.svg" },
      { icon: "/assets/footer/payment-1.svg" },
      { icon: "/assets/footer/payment-1.svg" },
    ],
    [
      { icon: "/assets/footer/payment-1.svg" },
      { icon: "/assets/footer/payment-1.svg" },
      { icon: "/assets/footer/payment-1.svg" },
    ],
  ];
  const [openEn, setOpenEn] = useState(false);
  const EnItems = [{ name: "English" }, { name: "Spanish" }];
  return (
    <div>
      {isMobile ? (
        <div className="mobile-footer p-2">
          <div className="mobile-footer-container">
            <div
              className="mobile-footer-header cursor-pointer"
              onClick={toggleFooter}
            >
              <h6 className="flex items-center gap-2">
                Popular Events and Sports News
                {isOpen ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
              </h6>
            </div>

            {isOpen && (
              <div className="mobile-footer-content">
                <div className="mobile-footer-section">
                  <h6>MAIN</h6>
                  <ul>
                    <li>Live</li>
                    <li>Sports</li>
                    <li>Promo Code Store</li>
                    <li>Special Offers and Bonuses</li>
                    <li>First Deposit Bonus</li>
                    <li>Casino</li>
                    <li>Live Casino</li>
                    <li>Registration</li>
                    <li>Results</li>
                    <li>Virtual sports</li>
                  </ul>
                </div>
                <div className="mobile-footer-section">
                  <h6>LIVE</h6>
                  <ul>
                    <li>Cricket</li>
                    <li>Football</li>
                    <li>Tennis</li>
                    <li>Basketball</li>
                    <li>Badminton</li>
                    <li>Greyhound Racing</li>
                    <li>Kabaddi</li>
                  </ul>
                </div>
                <div className="mobile-footer-section">
                  <h6>STATISTICS</h6>
                  <ul>
                    <li>Statistics</li>
                    <li>Results</li>
                  </ul>
                </div>
                <div className="mobile-footer-section">
                  <h6>USEFUL LINKS</h6>
                  <ul>
                    <li>Payment methods</li>
                    <li>Mobile version</li>
                    <li>Registration</li>
                  </ul>
                </div>
                <div className="mobile-footer-section">
                  <h6>APPS</h6>
                  <ul>
                    <li className="flex items-center gap-2">
                      <div>
                        <FaApple />
                      </div>
                      <div> iOS</div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>
                        <BsAndroid2 />
                      </div>
                      <div> Android</div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>
                        <PiWindowsLogoFill />
                      </div>
                      <div> Windows</div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="mobile-footer-providers">
            <div className="mobile-footer-providers-header">
              <h6>PARTNERS & PROVIDERS</h6>
            </div>
            <div className="provider-scroller flex mb-2 mt-1 gap-2">
              <div className="img-wrapper">
                <img src="/assets/footer/provider-1.svg" alt="Betfair" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-3.svg" alt="Evolution" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-4.svg" alt="Ezugi" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-5.svg" alt="Royal Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-6.svg" alt="AG Asia Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-1.svg" alt="Betfair" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-3.svg" alt="Evolution" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-4.svg" alt="Ezugi" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-5.svg" alt="Royal Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-6.svg" alt="AG Asia Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
            </div>
          </div>
          <div className="mobile-social-network p-2">
            <h6 className="flex-center p-2">SOCIAL NETWORK</h6>
            <div className="mobile-social-apps w-100  flex-center gap-2 pb-2">
              <div className="img-wrapper bg-facebook ">
                <img src={Images.SocialMedia2} alt="social-media-1" />
              </div>
              <div className="img-wrapper bg-twitter">
                <img src={Images.SocialMedia4} alt="social-media-2" />
              </div>
              <div className="img-wrapper bg-instagram">
                <img src={Images.SocialMedia3} alt="social-media-3" />
              </div>
              <div className="img-wrapper bg-telegram">
                <img src={Images.SocialMedia1} alt="social-media-4" />
              </div>
            </div>
          </div>
          <div className="mobile-footer-content p-2 w-100 d-flex flex-column justify-content-between">
            <p className="text-white m-0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex justify-between items-center py-2">
              <div>
                <img src={Images.Logo} alt="logo" className="logo-img w-100" />
              </div>
              <p className="text-white m-0">Copyright © 2023 9XCHANGE</p>
            </div>
          </div>

          <div className="mobile-footer-payments">
            <Carousel
              wrap={true}
              pause={false}
              indicators={false}
              controls={false}
              interval={2500}
              className="payment-slider"
            >
              {paymentOptions.map((group, groupIndex) => (
                <Carousel.Item
                  key={`group-${groupIndex}`}
                  className="payment-slide"
                >
                  <Row className="payment-row">
                    {group.map((option, optionIndex) => (
                      <Col
                        xs={4}
                        key={`option-${optionIndex}`}
                        className="payment-option-col"
                      >
                        <div className="payment-option">
                          <img
                            src={option.icon}
                            alt={option.label}
                            className="payment-icon"
                          />
                          <span className="payment-label">{option.label}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <footer className="footer-container">
          <div className="footer-header">
            <h5>POPULAR EVENTS AND SPORTS NEWS</h5>
          </div>
          <div className="footer-content">
            <div className="footer-section">
              <h6>MAIN</h6>
              <ul>
                <li>Live</li>
                <li>Sports</li>
                <li>Promo Code Store</li>
                <li>Special Offers and Bonuses</li>
                <li>First Deposit Bonus</li>
                <li>Casino</li>
                <li>Live Casino</li>
                <li>Registration</li>
                <li>Results</li>
                <li>Virtual sports</li>
              </ul>
            </div>
            <div className="footer-section">
              <h6>LIVE</h6>
              <ul>
                <li>Cricket</li>
                <li>Football</li>
                <li>Tennis</li>
                <li>Basketball</li>
                <li>Badminton</li>
                <li>Greyhound Racing</li>
                <li>Kabaddi</li>
              </ul>
            </div>
            <div className="footer-section">
              <h6>STATISTICS</h6>
              <ul>
                <li>Statistics</li>
                <li>Results</li>
              </ul>
            </div>
            <div className="footer-section">
              <h6>USEFUL LINKS</h6>
              <ul>
                <li>Payment methods</li>
                <li>Mobile version</li>
                <li>Registration</li>
              </ul>
            </div>
            <div className="footer-section">
              <h6>APPS</h6>
              <ul>
                <li className="flex items-center gap-2">
                  <div>
                    <FaApple />
                  </div>
                  <div> iOS</div>
                </li>
                <li className="flex items-center gap-2">
                  <div>
                    <BsAndroid2 />
                  </div>
                  <div> Android</div>
                </li>
                <li className="flex items-center gap-2">
                  <div>
                    <PiWindowsLogoFill />
                  </div>
                  <div> Windows</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-providers">
            <div className="footer-providers-header">
              <h5>PARTNERS & PROVIDERS</h5>
            </div>
            <div className="provider-scroller flex mb-2 mt-1 gap-2">
              <div className="img-wrapper">
                <img src="/assets/footer/provider-1.svg" alt="Betfair" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-3.svg" alt="Evolution" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-4.svg" alt="Ezugi" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-5.svg" alt="Royal Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-6.svg" alt="AG Asia Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-1.svg" alt="Betfair" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-3.svg" alt="Evolution" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-4.svg" alt="Ezugi" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-5.svg" alt="Royal Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-6.svg" alt="AG Asia Gaming" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
              <div className="img-wrapper">
                <img src="/assets/footer/provider-7.svg" alt="OneTouch" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row g-2 d-flex">
              <div className="col-md-6 d-flex">
                <div className="footer-bottom-left p-2 w-100 d-flex flex-column justify-content-between">
                  <p className="text-white m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <img
                        src={Images.Logo}
                        alt="logo"
                        className="logo-img w-100"
                      />
                    </div>
                    <p className="text-white m-0">Copyright © 2023 9XCHANGE</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="footer-bottom-right w-100 d-flex flex-column justify-content-between">
                  <div className="flex gap-2">
                    <div className="footer-social-media w-100 py-3 flex-center">
                      <div className="img-wrapper bg-facebook">
                        <img src={Images.SocialMedia2} alt="social-media-1" />
                      </div>
                      <div className="img-wrapper bg-twitter">
                        <img src={Images.SocialMedia4} alt="social-media-2" />
                      </div>
                      <div className="img-wrapper bg-instagram">
                        <img src={Images.SocialMedia3} alt="social-media-3" />
                      </div>
                      <div className="img-wrapper bg-telegram">
                        <img src={Images.SocialMedia1} alt="social-media-4" />
                      </div>
                    </div>
                    <div className="footer-18-plus flex-center px-2">
                      <p className="text-white">18+</p>
                    </div>
                  </div>
                  <div className="mt-2 w-100">
                    <button className="xbtn button-blue">Mobile Version</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-payments mt-2">
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
            <img src="/assets/footer/provider-2.svg" alt="Sportradar" />
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
