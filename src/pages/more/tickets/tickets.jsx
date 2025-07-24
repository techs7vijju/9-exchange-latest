import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaginationTable from "../../../components/tables/PaginationTable";
import Withdrawal from "../../Popups/Withdrawal";

import WalletTransfer from "../../Popups/WalletTransfer";

// Utility: Format date to yyyy-mm-dd

// Custom TextInput Component

// const TextInput = ({
//   type = "text",
//   label,
//   name,
//   value,
//   onChange,
//   error,
//   minDate,
//   maxDate,
// }) => {
//   return (
//     <div className="mb-3">
//       {label && (
//         <label htmlFor={name} className="form-label" style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`form-control ${error ? "is-invalid" : ""}`}
//         min={minDate}
//         max={maxDate}
//         placeholder="13/11/2023"
//       />
//       {error && <div className="text-danger">{error}</div>}
//     </div>
//   );
// };

function Tickets() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showProgress, setShowProgress] = useState(false);
  const [typewalletmode, settypewalletmode] = useState();
  const handleProgress = (pranaya) => {
    console.log(pranaya);
    setShowProgress(true);
    settypewalletmode(pranaya);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const dataColumns = [
    { header: "Date", field: "one" },
    { header: "Credit/Debit", field: "two" },
    { header: "Transaction Type/ID", field: "three" },
    { header: "Payment Mode", field: "four" },
    { header: "Bonus", field: "five" },
    { header: "Balance", field: "six" },
    { header: "Trans From - Trans To", field: "seven" },
    { header: "Status", field: "eight" },
  ];

  const [formData, setFormData] = useState({
    dob: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationErrors((prev) => ({ ...prev, [field]: "" }));
  };
  const [walletTransfer, setWalletTransfer] = useState(false);
  const handleWalletTransfer = () => {
    setWalletTransfer(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dob) {
      setValidationErrors({ dob: "Date of Birth is required" });
    } else {
      alert("Submitted: " + formData.dob);
    }
  };

  const minDate = formatDate(
    new Date(new Date().setFullYear(new Date().getFullYear() - 100))
  );
  const maxDate = formatDate(
    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  );

  const dataRows = [
    {
      one: (
        <div>
          13-09-23,
          <br />
          12:18:10 PM
        </div>
      ),
      two: <div className="table-font-green">0.00</div>,
      three: "Deposit",
      four: "Phone Pe",
      five: "0.00",
      six: "4300.00",
      seven: "vignesh - User12345",
      eight: (
        <div className="d-flex">
          <div className="table-orangebg flex-center px-2 py-2 table-rounded-start pointer">
            <FaEye onClick={() => handleProgress(1)} />
          </div>
          <div className="table-lightorangebg flex-center px-3 py-2 table-rounded-end">
            Progress
          </div>
        </div>
      ),
    },
    {
      one: (
        <div>
          13-09-23,
          <br />
          12:18:10 PM
        </div>
      ),
      two: <div className="table-redfont">1000.00</div>,
      three: (
        <div>
          Withdraw
          <br />
          ID : 1234567891234567
        </div>
      ),
      four: "NEFT/RTGS",
      five: "0.00",
      six: "4300.00",
      seven: "vignesh - User12345",
      eight: (
        <div className="d-flex">
          <div className="table-greenbg flex-center px-2 py-2 rounded-start pointer">
            <FaEye color="white" onClick={() => handleProgress(2)} />
          </div>
          <div className="table-lightgreenbg flex-center px-4 py-2 rounded-end fw-600 text-success">
            Settled
          </div>
        </div>
      ),
    },
    {
      one: (
        <div>
          13-09-23,
          <br />
          12:18:10 PM
        </div>
      ),
      two: <div className="table-redfont">0.00</div>,
      three: "Withdraw",
      four: "G Pay",
      five: "0.00",
      six: "4300.00",
      seven: "vignesh - User12345",
      eight: (
        <div className="d-flex">
          <div className="table-redbg flex-center px-2 py-2 table-rounded-start pointer">
            <FaEye onClick={() => handleProgress(3)} />
          </div>
          <div className="table-lightredbg flex-center px-3 py-2 table-rounded-end">
            Canceled
          </div>
        </div>
      ),
    },
    {
      one: (
        <div>
          13-09-23,
          <br />
          12:18:10 PM
        </div>
      ),
      two: <div className="table-font-green">5000.00</div>,
      three: (
        <div>
          Deposit
          <br />
          ID : 123456789002335
        </div>
      ),
      four: "Wallet Transfer",
      five: "300.00",
      six: "5300.00",
      seven: "vignesh - User12345",
      eight: (
        <div className="d-flex">
          <div className="table-greenbg flex-center px-2 py-2 rounded-start pointer">
            <FaEye color="white" />
          </div>
          <div className="table-lightgreenbg flex-center px-4 py-2 rounded-end fw-600 text-success">
            Settled
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="d-flex w-100 flex-column ticket-container">
      <div className="p-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-2">
            <h3 className="ticket-heading">Tickets</h3>
            <h6 className="ticket-subtext">
              More information about your deposit & withdraw
            </h6>
          </div>

          <div className="col-auto d-flex gap-4">
            <div>
              <button className="xbtn button-green px-4 mx-2">DEPOSIT</button>
              <button className="xbtn outline-red px-4 mx-2">WITHDRAW</button>
            </div>

            <div>
              <button
                className="xbtn button-blue nowrap px-4"
                onClick={handleWalletTransfer}
              >
                WALLET TRANSFER
              </button>
            </div>
          </div>
        </div>

        <div
          className="d-flex align-items-end gap-3 mt-4 flex-wrap"
          style={{
            background: "#ecf1f6",
            padding: "20px",
            borderRadius: "6px",
          }}
        >
          {/* From Date */}
          <div style={{ minWidth: "200px" }}>
            <label className="form-label fw-bold text-dark">From</label>
            <input
              type="date"
              className="form-control"
              placeholder="dd-mm-yyyy"
              value={formData.fromDate}
              onChange={(e) => handleChange("fromDate", e.target.value)}
            />
          </div>

          {/* To Date */}
          <div style={{ minWidth: "200px" }}>
            <label className="form-label fw-bold text-dark">To</label>
            <input
              type="date"
              className="form-control"
              placeholder="dd-mm-yyyy"
              value={formData.toDate}
              onChange={(e) => handleChange("toDate", e.target.value)}
            />
          </div>

          {/* Search Button */}
          <div className="">
            <button
              type="button"
              className="xbtn-search mt-5"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }} className="p ">
          <PaginationTable data={dataRows} columns={dataColumns} />
        </div>
      </div>
      <Withdrawal
        showProgress={showProgress}
        setShowProgress={setShowProgress}
        typewalletmode={typewalletmode}
      />
      <WalletTransfer
        walletTransfer={walletTransfer}
        setWalletTransfer={setWalletTransfer}
        // typewalletmode={typewalletmode}
      />
    </div>
  );
}

export default Tickets;
