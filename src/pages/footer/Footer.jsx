import React, { useState } from "react";
import { Images } from "../../images/images";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
// import ChatPopup from "../popup/ChatPopup";

function Footer() {
  const [showChat, setShowChat] = useState(false);
  const handleChatShow = () => setShowChat(true);
    const isMobile = useMediaQuery({ maxWidth: 768 });
     function toggleMenu() {
      const menu = document.getElementById("sidebarMenu");
      const arrow = document.getElementById("arrow");
      const isHidden = menu.classList.toggle("hidden");

      // Toggle arrow direction
      arrow.innerHTML = isHidden ? "&#9650;" : "&#9660;";
    }
    
  return (
    <>
     {isMobile ? (<div>
 <div class="sidebar">
    <div class="sidebar-header" onclick="toggleMenu()">
      Popular Events and Sports News
      <span class="arrow" id="arrow">&#9660;</span>
    </div>

    <ul class="sidebar-menu" id="sidebarMenu">
      <li class="menu-title">MAIN</li>
      <li>Live</li>
      <li>Sports</li>
      <li>Promo Code Store</li>
      <li>Special Offers and Bonuses</li>
      <li>First Deposit Bonus</li>
      <li>Casino</li>
      <li>Live Casino</li>
      <li>Registration</li>
      <li>Results</li>
      <li>Virtual Sports</li>
    </ul>
  </div>
  <div className="play-sec-bg py-2 font-14 px-2 mt-2 mb-1 text-start fw-600 white-font rounded-top blue-bg">
  PARTNERS & PROVIDERS
</div>

<div className="w-100 blue-bg">
  <div className="d-flex scroll-x blue-bg px-2 py-2">
    {[Images.betfair1, Images.sport, Images.evolution, Images.ezugi, Images.royal, Images.asiagaming, Images.mask].map((img, idx) => (
      <div className="partner-card me-3" key={idx}>
        <img src={img} className="partner-logo" alt="Partner Logo" />
      </div>
    ))}
  </div>
</div>


     </div>):(
    <div className="px-2 lastscreen-adjustments position-relative">
      <div className="play-sec-bg py-2 font-14 px-2 mt-2 mb-1 m text-start fw-600 white-font rounded-top blue-bg">
        POPULAR EVENTS AND SPORTS NEWS
      </div>
      <div className="footer-wrapper py-2 px-3 text-start clr-white rounded-bottom blue-bg white-font">
  <div className="w-100 d-flex flex-row justify-content-between flex-wrap ">
    <div className="flex">
      <div className="font-14 fw-600">MAIN</div>
      <div className="d-flex flex-column font-10">
        <span>Live</span>
        <span>Sports</span>
        <span>Promo Code</span>
        <span>Store</span>
        <span>Special Offers and Bonuses</span>
        <span>First Deposit Bonus</span>
        <span>Casino</span>
        <span>Live Casino</span>
      </div>
    </div>
    <div className="d-flex flex-column font-12 justify-content-end">
      <span>Registration</span>
      <span>Results</span>
      <span>Virtual sports</span>
    </div>
    <div className="flex">
      <div className="font-14 fw-600">LIVE</div>
      <div className="d-flex flex-column font-10">
        <span>Live</span>
        <span>Sports</span>
        <span>Promo Code</span>
        <span>Store</span>
        <span>Special Offers and Bonuses</span>
        <span>First Deposit Bonus</span>
        <span>Casino</span>
        <span>Live Casino</span>
      </div>
    </div>
    <div>
      <div className="font-14 fw-600">STATISTICS</div>
      <div className="d-flex flex-column font-10">
        <span>Statistics</span>
        <span>Results</span>
      </div>
    </div>
    <div>
      <div className="font-14 fw-600">USEFUL LINKS</div>
      <div className="d-flex flex-column font-10">
        <span>Statistics</span>
        <span>Results</span>
      </div>
    </div>
    <div>
      <div className="font-14 fw-600">APPS</div>
      <div className="d-flex flex-column font-10">
        <span>Payment methods</span>
        <span>Mobile version</span>
        <span>Registration</span>
      </div>
    </div>
  </div>
</div>

       <div className="play-sec-bg py-2 font-14 px-2 mt-2 mb-1 m text-start fw-600 white-font rounded-top blue-bg">
        PARTNERS & PROVIDERS
      </div>
   <div className="w-100 blue-bg">
  <div className="d-flex scroll-x  blue-bg px-2 py-2">
    <div className="partner-card me-3">
      <img src={Images.betfair1} className="partner-logo" alt="Betfair" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.sport} className="partner-logo" alt="Sportradar" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.evolution} className="partner-logo" alt="Evolution" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.ezugi} className="partner-logo" alt="Ezugi" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.royal} className="partner-logo" alt="Royal Gaming" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.asiagaming} className="partner-logo" alt="Asia Gaming" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.mask} className="partner-logo" alt="OneTc" />
    </div>
     <div className="partner-card me-3">
      <img src={Images.betfair1} className="partner-logo" alt="Betfair" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.sport} className="partner-logo" alt="Sportradar" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.evolution} className="partner-logo" alt="Evolution" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.ezugi} className="partner-logo" alt="Ezugi" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.royal} className="partner-logo" alt="Royal Gaming" />
    </div>
     <div className="partner-card me-3">
      <img src={Images.betfair1} className="partner-logo" alt="Betfair" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.sport} className="partner-logo" alt="Sportradar" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.evolution} className="partner-logo" alt="Evolution" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.ezugi} className="partner-logo" alt="Ezugi" />
    </div>
    <div className="partner-card me-3">
      <img src={Images.royal} className="partner-logo" alt="Royal Gaming" />
    </div>
  </div>
</div>




    <div className="w-100 d-flex justify-content-between flex-row blue-bg p-2 footer-container">
  {/* Left Side */}
  <div className="w-50 me-1">
    <div className="play-sec-bg copy-rights p-2">
      <div className="font-14 clr-white mb-2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
      <div className="d-flex justify-content-between align-items-center px-2">
        <img className="footer-logo" src={Images.Logo} alt="Logo" />
        <div className="font-14 clr-white">Copyright © 2023 9XCHANGE</div>
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="w-50 ms-1 d-flex flex-column justify-content-between">
    {/* Social Media */}
    <div className="d-flex justify-content-between play-sec-bg p-2 social-container">
      <div className="social-icon fb-bg flex-center">
        <i className="fa fafacebookf text-white"></i>
        <FaFacebookF className="white-font"/>
      </div>
      <div className="social-icon twitter-bg flex-center">
        <i className="fa fa-twitter text-white"></i>
        <FaTwitter className="white-font"/>
      </div>
      <div className="social-icon insta-bg flex-center">
        <i className="fab fa-instagram text-white"></i>
        <SiInstagram className="white-font" />
      </div>
      <div className="social-icon telegram-bg flex-center">
        <i className="fab fa-telegram-plane text-white"></i>
        <BiLogoTelegram className="white-font" />
      </div>
    </div>

    {/* Mobile Version */}
    <div className="mobile-version-bg text-center  py-2 rounded text-uppercase clr-white">
      Mobile Version
    </div>
  </div>

  {/* 18+ box */}
  <div className="d-flex align-items-center justify-content-center age-box text-white fw-bold">
    18+
  </div>
</div>

      <div className="play-sec-bg py-1 font-16 px-1 py-3 my-2 text-start fw-600 clr-white d-flex flex-row w-100 p-2 h-8vh align-items-center">
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.bank} className="payment-images" />
        </div>
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.upi} className="payment-images" />
        </div>
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.phnpay} className="payment-images" />
        </div>
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.gpay} className="payment-images" />
        </div>
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.paytm} className="payment-images" />
        </div>
        <div className="play-sec-bg h-30p w-20 clr-white d-flex justify-content-center">
          <img src={Images.qrcode} className="payment-images" />
        </div>
      </div>
      
    
    </div>
  )}
  </>
  );
}

export default Footer;
