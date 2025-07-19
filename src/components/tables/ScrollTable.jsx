import React from "react";
function ScrollTable({ data, columns, className }) {
    return (
      <div className={`page-table-container ${className}`}>
        <div className="table-scroll-container">
          <table className="table-container">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th className="bg-dark3" key={index}>
                    <small className="small-light">{col.header}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {data.map((row, rowIndex) => (
                <tr className="color-grey1 small-font" key={rowIndex}>
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
      </div>
    );
  }
  
  export default ScrollTable;