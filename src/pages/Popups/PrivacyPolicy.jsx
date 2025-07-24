import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PrivacyPolicy = ({ openPrivacy, setOpenPrivacy }) => {
  const handleClose = () => setOpenPrivacy(false);
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "Privacy Policy",
      content:
        "We use your personal data to provide our services, comply with legal obligations, and improve your experience. This includes creating accounts, processing transactions, communicating with you, and providing customer support.",
    },
    {
      title: "Personal Data Collect from You",
      content:
        ""},
    {
      title: "Use of Personal Data",
      content:
       ""},
    {
      title: "Sharing and Disclosing of Personal Data",
      content:
       "1. Disclosure to Other Data Controller In order to achieve the above purposes, our company will share your personal details within companies belonging to the same BC.CO series.We will also disclose your personal details to other third party data controllers with your consent (where required by applicable law) or to provide any services you request (such as third party integrations). The Services may also be used by third party data controllers to collect and process your personal details. If you use an email address associated with a businessdomain to access BC.CO's services, our company may provide your personal details to that business.2. Disclosure of Information for Fraud Prevention and Security ConsiderationsWe will disclose personal details to companies that help us operate our business to detect, prevent or otherwise address fraud, deception, illegal activity, abuse of BC.CO services, and security ortechnical issues. In addition, if the Company believes in good faith that access, use, preservation or disclosure of information is reasonably necessary to detect, prevent or avoid such fraud,deceptive or illegal activities, abuse of services and software, or security or technical issues, or is reasonably necessary, in accordance with legal regulations and permission, in order to protect the rights, property or safety of our employees, BC.CO users, children or the public, our company will disclose personal details to companies, organizations, government agencies or individualsother than us."},
    {
      title: "5. Changes to Our Privacy Policy",
      content:
        "We may revise this Privacy Policy from time to time. When we do, we will update the 'last modified' date and notify users where appropriate.",
    },
  ];

  return (
    <Modal
      show={openPrivacy}
      onHide={handleClose}
      centered
      size="md"
      dialogClassName="privacy-modal"
    >
      <Modal.Body className="p-3">
       

        {sections.map((section, index) => (
          <div key={index} className="mb-3 rounded p-2 ">
            <div
              className="d-flex justify-content-between align-items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <span className="fw-bold blue-color">{section.title}</span>
              {openSections.includes(index) ? (
                <FaChevronDown className="text-dark" />
              ) : (
                <FaChevronUp className="text-secondary" />
              )}
            </div>
            {openSections.includes(index) && (
              <p className="mt-2 text-muted">{section.content}</p>
            )}
          </div>
        ))}

        <div className="text-end mt-4">
          <button className="btn btn-outline-secondary" onClick={handleClose}>
            Close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PrivacyPolicy;
