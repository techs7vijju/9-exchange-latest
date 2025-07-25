import React from "react";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { PiWindowsLogoFill } from "react-icons/pi";
import { Images } from "../../images/images";

const Footer = () => {
  return (
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

      <div className="footer-providers-header">
        <h5>PARTNERS & PROVIDERS</h5>
      </div>

      <div className="provider-scroller flex my-2 gap-2">
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

      <div className="footer-bottom flex justify-between">
        <div className="footer-bottom-left">
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when
            <br /> looking at its layout.{" "}
          </p>
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <img src={Images.Logo} alt="logo" className="logo-img w-100" />
            </div>
            <p className="text-white">Copyright © 2023 9XCHANGE</p>
          </div>
        </div>
        <div className="footer-bottom-right">hellooo</div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
