import React from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../../images/images";
import SelectInput from "../../../components/form-elements/SelectInput";
import TextInput from "../../../components/form-elements/TextInput";

function WalletTransfer({ walletTransfer, setWalletTransfer }) {
  const handleClose = () => {
    setWalletTransfer(false);
  };
  return (
    <Modal
      show={walletTransfer}
      centered
      className="custom-popup-modal"
      size="md"
      onHide={handleClose}
    >
      <div className="p-4">
        <div className="flex-start">
          <div className="wallet blue p-3 rounded-circle">
            <img src={Images.walletransfer} />
          </div>

          <div className="">
            <h3 className="wallet ms-3">Wallet Transfer</h3>
            <div className="d-flex flex-row ms-3">
              <div className="wallet bluefont border rounded-5 p-2">Admin - Dinesh</div>
              <div  className="wallet bluefont border rounded-5 ms-2 withdraw-flex p-2">user12345 - USD</div>
            </div>
          </div>
        </div>
         <button
          className="btn-close "
          onClick={handleClose}
          aria-label="Close"
        ></button>
        <div className="flex-between wallet blue rounded-5 p-3 mt-3">
          <div className="d-flex flex-row"><div><img src={Images.wallet2}/></div> <div>Wallet Bal.</div></div> 
            <div>10000</div>
        </div>
        <div>
            <div className="mt-3">
                <SelectInput
                  label="Transfer Site"
                  placeholder=
                  'Diamond Exchange'
                  name="country_id"
                //   value={selectedCountry}
                //   onChange={()}
                //   options={}
                //   error={}
                //   required
                />
              </div>
               {/* <TextInput
              type="text"
              label="svg icon"
              placeholder="Enter"
            //   error=""
              icon={Images.Logo}
            /> */}
        </div>
        <div>
            <TextInput
              type="text"
              label="Transfer Chips"
              placeholder="Enter"
             
            />
          {/* <TextInput
                type="email"
                label="Email (Optional)"
                // name="email"
                // value={formData.email}
                // onChange={handleChange}
                // error={validationErrors.email}
              /> */}
        </div>
      </div>
    </Modal>
  );
}

export default WalletTransfer;
