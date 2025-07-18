import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
// import TextInput from "../components/form-elements/TextInput";
import SelectInput from "../../components/form-elements/SelectInput";
import StatCard from "../../components/common/StatCard";
import TextareaInput from "../../components/form-elements/TextareaInput";
import PaginationTable from "../../components/tables/PaginationTable";
import ScrollTable from "../../components/tables/ScrollTable";
// import AddRejectPopup from "../pages/reference-data/popups/AddRejectPopup";
// import AddSecurityPopup from "../pages/reference-data/popups/AddSecurityPopup";
// import AddPolicyDocument from "../pages/reference-data/popups/AddPolicyDocument";
// import AddCountryPopup from "./reference-data/popups/AddCountryPopup";
// import AddDirectorPopup from "./add-director-sa/Popups/AddDirectorPopup";
// import TicketPopup from "./tickets/popups/TicketPopup";
import InfoCard from "../../components/common/InfoCards";
import InputDate from "../../components/form-elements/InputDate";
import TextInput from "../../components/form-elements/TextInput";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
  { label: "Option 6", value: "option6" },
  { label: "Option 7", value: "option7" },
  { label: "Option 8", value: "option8" },
  { label: "Option 9", value: "option9" },
];

const Appui = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const svgIcon = () => {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="-4 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <title>location</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="Icon-Set"
            sketch:type="MSLayerGroup"
            transform="translate(-104.000000, -411.000000)"
            fill="#696cff"
          >
            <path
              d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
              id="location"
              sketch:type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
    );
  };
  const dataColumns = [
    { header: "SERIES NAME", field: "one" },
    { header: "TEAM", field: "two" },
    { header: "SPORTS NAME", field: "three" },
    { header: "MATCH PLACE", field: "five" },
    { header: "DATE & TIME", field: "six" },
  ];

  const dataRows = [
    {
      one: "T20 world cup",
      two: <div className="color-orange2">Newziland vs SriLanka</div>,
      three: "Cricket,Male",
      five: (
        <div>
          One Day
          <br /> Amhadabad Stadium
        </div>
      ),
      six: (
        <div className="d-flex">
          <div>
            01/08/2023
            <br />
            11:46:00 AM
          </div>
        </div>
      ),
    },
    {
      one: "T20 world cup",
      two: <div className="color-orange2">Newziland vs SriLanka</div>,
      three: "Cricket,Male",
      four: (
        <div className="bg-dark4 rounded-pill" style={{ height: "42px" }}></div>
      ),
      five: (
        <div>
          One Day
          <br /> Amhadabad Stadium
        </div>
      ),
      six: (
        <div className="d-flex">
          <div>
            01/08/2023
            <br />
            11:46:00 AM
          </div>
        </div>
      ),
    },
    {
      one: "T20 world cup",
      two: <div className="color-orange2">Newziland vs SriLanka</div>,
      three: "Cricket,Male",
      four: (
        <div className="bg-dark4 rounded-pill" style={{ height: "42px" }}></div>
      ),
      five: (
        <div>
          One Day
          <br /> Amhadabad Stadium
        </div>
      ),
      six: (
        <div className="d-flex">
          <div>
            01/08/2023
            <br />
            11:46:00 AM
          </div>
        </div>
      ),
    },
  ];
  const [dob, setDob] = useState(null);

  return (
    <>
      <div style={{ padding: "15px" }}>
        <>
          <section style={{ marginBottom: "30px" }}>
            <h1 className="text-info">Typography</h1>
            <div className="">
              <h1>Heading 1 23px</h1>
              <h1 className="h1-light">Heading 1 23px</h1>
              <h2>Heading 2 19px</h2>
              <h2 className="h2-light">Heading 2 19px</h2>
              <p>Paragraph 16px</p>
              <p className="p-light">Paragraph 16px</p>
              <small className="">small 12px</small>
              <br />
              <small className="small-light">small 12px</small>
            </div>
          </section>
        </>

        <section className="gap-2" style={{ marginBottom: "20px" }}>
          <h1 className="">Buttons</h1>
          <br />
          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button className="xbtn button-blue">Button</button>
          </div>
          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button className="xbtn button-gray">Button</button>
          </div>
          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button className="xbtn outline">Button</button>
          </div>
          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button disabled className="xbtn button-blue">
              Button
            </button>
          </div>

          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button disabled className="xbtn button-blue">
              <span className="spinner-border spinner-border-sm"></span>
              Button
            </button>
          </div>

          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button className="flex-center xbtn button-blue">
              <span className="icon">
                <FaPlus size={16} />
              </span>
              Icon
            </button>
          </div>

          <div style={{ width: "150px", marginBottom: "20px" }}>
            <button className="flex-center xbtn button-blue">
              <span className="icon">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#ffffff"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              SVG
            </button>
          </div>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h1 style={{ marginBottom: "20px" }}>Inputs</h1>
          <form className="">
            <div className="input-group">
              <label htmlFor="input">Input</label>
              <input type="text" id="input" />
              <small className="error">Error</small>
            </div>

            <TextInput type="text" label="Input" placeholder="Enter" error="" />
            <TextInput
              type="password"
              label="Password"
              placeholder="Enter"
              error=""
              togglePassword={togglePassword}
              showPassword={showPassword}
            />

            <TextInput
              type="text"
              label="Input"
              placeholder="Enter"
              error=""
              icon={"/public/assets/icons/temp/customer.svg"}
            />

            <TextInput
              type="text"
              label="svg icon"
              placeholder="Enter"
              error=""
              svgIcon={svgIcon}
            />
            <form>
              <InputDate
                label="Date of Birth"
                required={true}
                selectedDate={dob}
                setSelectedDate={setDob}
                placeholder="Select your DOB"
                minDate={new Date("1900-01-01")}
                maxDate={new Date()}
                error={dob === null ? "Date is required" : ""}
              />
            </form> 
            <InputDate />
            <SelectInput
              label="Select"
              options={options}
              value={selectedValue}
              onChange={(e) => {
                console.log(e);
                setSelectedValue(e);
              }}
              error=""
              placeholder="Select an option"
            />
          </form>
          <form className="">
            <TextareaInput
              rows="3"
              type="text"
              label="Textarea"
              placeholder="Enter"
              error="error"
            />
          </form>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h1 style={{ marginBottom: "20px" }}>Cards</h1>
          <div style={{ marginBottom: "20px" }}>
            <InfoCard title="Total Revenue" value="303.00" percent={6.32} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <StatCard buy="400" sale="200" balance="200" />
          </div>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h1 style={{ marginBottom: "10px" }}>Tables</h1>
          <div style={{ marginBottom: "30px" }}>
            <PaginationTable data={dataRows} columns={dataColumns} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <ScrollTable data={dataRows} columns={dataColumns} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Appui;
