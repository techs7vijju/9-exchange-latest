import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useOutsideClick from "../../../hooks/useOutsideClick";

function LanguageDropdown({ selectedLanguage, onSelectLanguage }) {
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { code: "EN", name: "English" },
    { code: "IN", name: "Indian English" },
    { code: "VI", name: "Tiếng việt" },
    { code: "ID", name: "Indonesian" },
    { code: "JP", name: "日本語" },
    { code: "AR", name: "عربي" },
    { code: "HI", name: "हिन्दी" },
    { code: "BN", name: "বাংলা" },
  ];

  const toggleLanguageDropdown = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (code) => {
    onSelectLanguage(code);
    setShowLanguages(false);
  };

  const dropdownRef = useOutsideClick(() => {
    setShowLanguages(false);
  });

  return (
    <div className="Language-selector d-flex items-center position-relative" ref={dropdownRef}>
      <div
        className="d-flex align-items-center py-2 rounded-1 pointer me-2"
        onClick={toggleLanguageDropdown}
      >
        <CiGlobe size={18} className="me-1 stroke1" />
        <p className="me-2">{selectedLanguage}</p>
        {showLanguages ? (
          <FaChevronUp size={16} />
        ) : (
          <FaChevronDown size={16} />
        )}
      </div>

      {showLanguages && (
        <div
          className="language-dropdown position-absolute top-100 mt-1 bg-white rounded shadow-sm shadow-lg"
          style={{ width: "220px", zIndex: 1000, left: 0 }}
        >
          <div className="p-3">
            <div className="input-container px-2 mb-2 rounded-1 d-flex items-center">
              <FiSearch className="icon" size={18} />
              <input
                type="text"
                className="ps-2 py-2 border-0"
                placeholder="Search.."
                style={{ border: "none", outline: "none" }}
              />
            </div>

            {languages.map((lang, index) => (
              <div
                key={index}
                className={`d-flex align-items-center justify-content-between p-2 cursor-pointer rounded 
                  ${lang.code === selectedLanguage ? "lite-bg-blue1" : ""}
                  language-item`}
                onClick={() => selectLanguage(lang.code)}
              >
                <span
                  className={`${
                    lang.code === selectedLanguage
                      ? "text-blue2"
                      : "text-dark pointer zoom-on-hover"
                  }`}
                >
                  {lang.name}
                </span>
                <div
                  className={`d-flex justify-content-center align-items-center rounded-circle border ${
                    lang.code === selectedLanguage
                      ? "bg-warning border-warning gradient-bg-yellow1"
                      : "border-primary"
                  }`}
                  style={{ width: "20px", height: "20px" }}
                >
                  {lang.code === selectedLanguage && (
                    <div
                      className="rounded-circle bg-white"
                      style={{
                        width: "10px",
                        height: "10px",
                        margin: "3px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
