import React, { useState } from "react";

function PaginationTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="page-table-container ">
      <div className="table-scroll-container p-2 br-3 ">
        <table className="table-container table-grey-border ">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th className="bg-dark3" key={index}>
                  <small className="small-light">{col.header}</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr className="color-grey1" key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    <p className="p-grey">{row[col.field]}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="pagination-container flex justify-end items-center ">
        <button
          className="wbtn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <div className="">
          <button className="wbtn">1</button>
          <button className="wbtn">2</button>
          <button className="wbtn">3</button>
          <button className="wbtn">4</button>
        </div>

        <button
          className="wbtn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationTable;
