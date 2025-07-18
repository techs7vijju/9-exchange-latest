import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TermsService = ({ openTerms, setOpenTerms }) => {
  const handleClose = () => setOpenTerms(false);
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sections = [
    {
      title: "1. Introduction",
      content: `These terms and conditions and the documents referred to below (the "Terms") apply to the use of BC.CO (the "Website") and its related or connected services (collectively, the "Service").

You should carefully review these Terms as they contain important information concerning your rights and obligations regarding the use of the Website and form a binding legal agreement between you — our customer (the "Customer") — and us.

By using this Website and/or accessing the Service, whether as a guest or a registered user with an account ("Account"), you agree to be bound by these Terms, including any amendments published from time to time. If you do not accept these Terms, you should refrain from accessing the Service and using the Website.

In addition to these Terms, our Privacy Policy applies to your use of the Website and the Services, and you should review it prior to any use of the Website or the Services.

Your use of the Services is subject to all additional rules applicable to the Services, including but not limited to our "Responsible Gaming Policy" and "KYC Policy", as updated from time to time. The Privacy Policy, Responsible Gaming Policy, and KYC Policy are incorporated by reference into these Terms and shall constitute an integral part thereof.

The Service is operated by Twocent Technology Limited, a limited liability company registered in Belize with company registration number 000041939, with registered address at Sea Urchin Street, San Pedro, Ambergris Caye, Belize ("Company", "We", "Us", or "Our"). The company is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros, and operates under License No. ALSI-202410011-FI1.`,
    },

    {
      title: "2. General Terms",
      content: "",
    },
    {
      title: "3. Your Obligations",
      content: "",
    },
    {
      title: "4. Restricted use",
      content: "",
    },
    {
      title: "5. Registration",
      content: "",
    },
    {
      title: "6. Your Account",
      content: "",
    },
    {
      title: "7. Deposit of Funds",
     content: `7.1. All deposits should be made from an account, payment system, or credit card registered in your own name. Any deposits made in another currency will be converted using the daily exchange rate obtained from oanda.com, or at our bank's or payment processor's prevailing exchange rate. Your Account will be credited accordingly. Note: some payment systems may apply additional currency exchange fees, which will be deducted from your deposit.

7.2.Fees and charges may apply to deposits and withdrawals. These are listed on the Website. In most cases, BC.CO absorbs transaction fees for deposits, but you are responsible for any charges imposed by your bank.

7.3. BC.CO is not a financial institution and uses third-party electronic payment processors for credit/debit card deposits. Funds are only credited to your Account upon receiving approval and authorization from the card issuer. If no authorization is received, the deposit will not be credited.

7.4. You agree to fully pay all charges related to your use of the Service, including those to third-party providers. You must not initiate chargebacks or reverse deposits. If you do, you must refund and compensate BC.CO for the unpaid amount and related collection expenses. Any winnings from wagers made with charged-back funds will be forfeited. You acknowledge that your BC.CO Account is not a bank account and is not protected or insured by any financial deposit scheme, and does not accrue interest.

7.5. If you accept a promotional or bonus offer by entering a bonus code during deposit, you agree to the Terms of Bonuses and the conditions of that specific bonus.

7.6. Funds from criminal, illegal, or unauthorized activities must not be deposited.

7.7. If you deposit using a credit card, you are advised to keep a copy of your transaction records and these Terms.

7.8. Internet gambling may be illegal in your jurisdiction. If so, you are not authorized to use a payment card on this site. It is your responsibility to know the gambling laws in your country of residence.`},

    
    {
      title: "8. Withdrawal of Funds",
      content:
        ""},
    {
      title: "9. Payment Transactions and Processors",
      content:
        ""},
  ];

  return (
    <Modal
      show={openTerms}
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

export default TermsService;
