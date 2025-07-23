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
    <div className="position-relative" ref={dropdownRef}>
      <div
        className="d-flex align-items-center py-2 px-2 bg-blue2 rounded-1 pointer me-2"
        onClick={toggleLanguageDropdown}
      >
        <CiGlobe size={18} className="me-1 stroke1 zoom-on-hover" />
        <span className="mx-1">{selectedLanguage}</span>
        {showLanguages ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {showLanguages && (
        <div
          className="position-absolute top-100 mt-1 bg-white rounded shadow-sm language-dropdown shadow-lg"
          style={{ width: "220px", zIndex: 1000, right: 8 }}
        >
          <div className="p-3">
            <div className="d-flex align-items-center lite-bg-blue1 mb-3 px-2 border-blue1 rounded-1">
              <FiSearch className="text-blue1 me-2" size={18} />
              <input
                type="text"
                className="py-2 all-none text-blue1 blue-placeholder lite-bg-blue1"
                placeholder="Search.."
                style={{ border: "none" }}
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
