import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../../images/images";

function Withdrawal({ showProgress, setShowProgress, typewalletmode }) {
  const handleClose = () => {
    setShowProgress(false);
  };
  return (
    <Modal
      show={showProgress}
      centered
      className="custom-popup-modal"
      size="md"
      onHide={handleClose}
    >
      <div className="modal-header-fixed p-2">
        <button
          className="btn-close "
          onClick={handleClose}
          aria-label="Close"
        ></button>

        {typewalletmode ===3 &&(<div className=" row p-2 modal-header-fixed">
          <div className="col-4 withdrawal-bluefont fw-600 withdraw-flex">
            User12345
          </div>
          <div className="col-3 withdrawal-cancelled p-2 me-2 flex-center">
            Canceled
          </div>
          <div className="col-4 withdrawal-Usd flex-center ms-2">
            Withdraw In USD
          </div>
        </div>)}
        
         {typewalletmode ===2 &&(<div className=" row p-2 ">
          <div className="col-4 withdrawal-bluefont fw-600 withdraw-flex">
            User12345
          </div>
          <div className="col-3 withdrawal-greenfont p-2 me-2 flex-center">
            Canceled
          </div>
          <div className="col-4 withdrawal-greenbg flex-center ms-2">
           Deposit In USD
          </div>
        </div>)}
        <hr />
        <div>
          <div className="flex-between px-2">
            <div className="withdrawal-bluefont-usd">UTR No</div>
            <div className="withdrawal-bluefont num fw-500">
              123456789123456
            </div>
          </div>
          <div className="withdrawal custom-line"></div>
          <div className="flex-between px-2">
            <div className="withdrawal-bluefont-usd">USD to INR</div>
            <div className="withdrawal-bluefont num">80.00</div>
          </div>
          <div className="withdrawal custom-line"></div>
          <div className="flex-between px-2">
            <div className="withdrawal-bluefont-usd">Currency</div>
            <div className="withdrawal-bluefont num">USD</div>
          </div>
         <div className="withdrawal custom-line"></div>
          <div className="flex-between px-2">
            <div className="withdrawal-bluefont-usd">Current Amount</div>
            <div className="withdrawal-bluefont num">4000</div>
          </div>
          <div className="withdrawal custom-line"></div>
          <div className="flex-between px-2">
            <div className="withdrawal-bluefont-usd">Amount in INR</div>
            <div className="withdrawal-bluefont num color">320000</div>
          </div>
          <div className="withdrawal custom-line"></div>
          <div className="p-2">
            <div className="border rounded-4 p-2 ">
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd">Payment Method</div>
                <div className="withdrawal-bluefont num color">NEFT/RTGS</div>
              </div>
              <hr />
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd font">Bank Name</div>
                <div className="withdrawal-bluefont num">
                  Kotak Mahindra Bank
                </div>
              </div>
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd font">Bank IFSC</div>
                <div className="withdrawal-bluefont num">KKBK3456332</div>
              </div>
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd font">Account No.</div>
                <div className="withdrawal-bluefont num">34311236216</div>
              </div>
              <hr />
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd font">From</div>
                <div className="withdrawal-bluefont num">vignesha - Admin</div>
              </div>
              <div className="flex-between px-2 py-1">
                <div className="withdrawal-bluefont-usd font">To</div>
                <div className="withdrawal-bluefont num">User12345</div>
              </div>
              <hr />
              <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd font">Date & Time</div>
                <div className="withdrawal-bluefont num">
                  18-01-2025 I 05:30:37
                </div>
              </div>
            </div>
            <div className="mt-2">
              <img src={Images.bird} />
            </div>
            <div className="border rounded-4 p-2 mt-2">
            <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd">Sports & Casino Chips In USD</div>
                <div className="withdrawal-bluefont num color">4000</div>
              </div>
              </div>
            <div className="border rounded-4 p-2 mt-2">
            <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd">Sports & Casino Chips In INR</div>
                <div className="withdrawal-bluefont num color">320000</div>
              </div>
              </div>
           {typewalletmode ===3 &&( <div className="border rounded-4 p-2 mt-2">
            <div className="flex-between px-2 ">
                <div className="withdrawal-bluefont-usd">Rejection Reason</div>
                <div className="withdrawal-redfont">Insufficient Balance</div>
              </div>
              </div>)} 
          
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Withdrawal;
