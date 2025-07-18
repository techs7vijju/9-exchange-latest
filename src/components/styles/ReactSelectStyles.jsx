export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#3a3c58",
    padding: "8px 0px",
    border: "none",
    boxShadow: "none",
    outline: "none",
    minHeight: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      border: "none",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "transparent",
    caretColor: "transparent",
    margin: 0,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#a3a4cc",
    padding: "5px",
    fontSize: "0.875rem",
    opacity: 0.8,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#c5c6e7",
    padding: "5px",
    fontSize: "0.875rem",
    marginLeft: "2px",
  }),
  option: (base, state) => ({
    ...base,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    backgroundColor: state.isSelected
      ? "#434564"
      : state.isFocused
      ? "#434564"
      : "#3a3c58",
    color: "#c5c6e7",
    cursor: "pointer",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    margin: "0 2px",
    padding: "8px 12px",
    fontSize: "0.875rem",
    ":active": {
      backgroundColor: state.isSelected ? "#434564" : "#3d3f60",
    },
    borderLeft: state.isSelected ? "4px solid #696cff" : "none",
    "&:first-of-type": {
      marginTop: "2px",
    },
    "&:last-of-type": {
      marginBottom: "2px",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 5,
    marginTop: "5px",
    borderRadius: "10px",
    backgroundColor: "#3a3c58",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    overflow: "hidden",
  }),
  menuList: (base) => ({
    ...base,
    padding: "2px 0",
    margin: 0,
    borderRadius: "8px",
    maxHeight: "200px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "smooth",

    // Webkit scrollbar
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "0px", // Disable horizontal scrollbar
    },
    "&::-webkit-scrollbar-track": {
      background: "#3a3c58",
      borderRadius: "10px",
      margin: "4px 0",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#696cff",
      borderRadius: "10px",
      "&:hover": {
        background: "#7d80ff",
      },
    },

    // Firefox scrollbar
    scrollbarWidth: "thin",
    scrollbarColor: "#696cff #3a3c58",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: "0 4px 0 0",
    color: "#a3a4cc",
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    "&:hover": {
      color: "#c5c6e7",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: "0 4px",
    color: "#a3a4cc",
    "&:hover": {
      color: "#c5c6e7",
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#a3a4cc",
    padding: "8px 12px",
    fontSize: "0.875rem",
  }),
  loadingMessage: (base) => ({
    ...base,
    color: "#a3a4cc",
    padding: "8px 12px",
    fontSize: "0.875rem",
  }),
};