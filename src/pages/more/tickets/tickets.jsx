import React, { useState } from "react";
import { FaEye, FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaginationTable from "../../../components/tables/PaginationTable";

function Tickets() {
  const [selectedDate, setSelectedDate] = useState(null);

  const placeholder = "dd/mm/yyyy";
  const minDate = new Date("2000-01-01");
  const maxDate = new Date();
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

  const dataRows = [
    {
      one: (
        <div className="">
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
          <div className="table-orangebg flex-center px-2 py-2 table-rounded-start">
            <FaEye />
          </div>
          <div className="table-lightorangebg flex-center px-3 py-2 table-rounded-end">
            Progress
          </div>
        </div>
      ),
    },
    {
      one: (
        <div className="">
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
          <div className="table-greenbg flex-center px-2 py-2 rounded-start">
            <FaEye color="white" />
          </div>
          <div className="table-lightgreenbg flex-center px-4 py-2 rounded-end fw-600 text-success">
            Settled
          </div>
        </div>
      ),
    },
    {
      one: (
        <div className="">
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
          <div className="table-redbg flex-center px-2 py-2 table-rounded-start">
            <FaEye />
          </div>
          <div className="table-lightredbg flex-center px-3 py-2 table-rounded-end">
            Canceled
          </div>
        </div>
      ),
    },
    {
      one: (
        <div className="">
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
          <div className="table-greenbg flex-center px-2 py-2 rounded-start">
            <FaEye color="white" />
          </div>
          <div className="table-lightgreenbg flex-center px-4 py-2 rounded-end fw-600 text-success">
            Settled
          </div>
        </div>
      ),
    },
    // {
    //   one: "T20 world cup",
    //   two: <div className="color-orange2">Newziland vs SriLanka</div>,
    //   three: "Cricket,Male",
    //   four: (
    //     <div className="bg-dark4 rounded-pill" style={{ height: "42px" }}></div>
    //   ),
    //   five: (
    //     <div>
    //       One Day
    //       <br /> Amhadabad Stadium
    //     </div>
    //   ),
    //   six: (
    //     <div className="d-flex">
    //       <div>
    //         01/08/2023
    //         <br />
    //         11:46:00 AM
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   one: "T20 world cup",
    //   two: <div className="color-orange2">Newziland vs SriLanka</div>,
    //   three: "Cricket,Male",
    //   four: (
    //     <div className="bg-dark4 rounded-pill" style={{ height: "42px" }}></div>
    //   ),
    //   five: (
    //     <div>
    //       One Day
    //       <br /> Amhadabad Stadium
    //     </div>
    //   ),
    //   six: (
    //     <div className="d-flex">
    //       <div>
    //         01/08/2023
    //         <br />
    //         11:46:00 AM
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="d-flex w-100 flex-column ticket-container">
      <div className="p-10">
        {/* Header row */}
        <div className="row align-items-center justify-content-between">
          <div className="col-2">
            <h4 className="ticket-container fw-600 mb-1">Tickets</h4>
            <div className="xsmall-font p fw-500 nowrap ticket-container-smalltext">
              More information about your deposit & withdraw
            </div>
          </div>

          <div className="col-auto d-flex gap-4 ">

            <div>
              <button className="xbtn button-green px-4 mx-2">DEPOSIT</button>
              <button className="xbtn outline-red px-4 mx-2">WITHDRAW</button>
            </div>

            <div>
              <button className="xbtn button-blue nowrap px-4">
                WALLET TRANSFER
              </button>
            </div>

          </div>
        </div>

        {/* Date Picker and more */}
        <div className="d-flex gap-3 mt-4">
          {/* Date input with icon */}
          <div className="date-input-wrapper position-relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText={placeholder}
              dateFormat="dd/MM/yyyy"
              minDate={minDate}
              maxDate={maxDate}
              className="custom-date-input"
            />
          </div>

          <div className="">
            {" "}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText={placeholder}
              dateFormat="dd/MM/yyyy"
              minDate={minDate}
              maxDate={maxDate}
              className="custom-date-input"
            />
          </div>
          <div className="">
            <button className="xbtn button-green1 px-2 ">Search</button>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }} className="p fw-600">
          <PaginationTable data={dataRows} columns={dataColumns} />
        </div>
      </div>
    </div>
  );
}

export default Tickets;
