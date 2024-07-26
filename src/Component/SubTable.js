import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import SubSubTable from './subSubTable'; // Ensure this component exists

const SubTable = ({ subData }) => {
  const [clickedRow, setClickedRow] = useState(null);

  const handleRowClick = (index) => {
    setClickedRow(index === clickedRow ? null : index); // Toggle the clicked row
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Department</th>
            <th>Total Task</th>
            <th><GoDotFill className='icon5'/>In Progress</th>
            <th><GoDotFill className='icon3'/>In Pipeline</th>
            <th><GoDotFill className='icon6'/>For Review</th>
            <th><GoDotFill className='icon4'/>Unassigned</th>
          </tr>
        </thead>
        <tbody>
          {subData.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="tbl-body" onClick={() => handleRowClick(index)}>
                <td>{row.id}</td>
                <td>{row.Department}</td>
                <td>{row.TotalTask}<FaAngleDown className="icon1" /></td>
                <td>{row.Progress}</td>
                <td>{row.Pipeline}</td>
                <td>{row.Review}</td>
                <td>{row.unassigned}</td>
              </tr>
              {clickedRow === index && (
                <tr>
                  <td colSpan="7">
                    <SubSubTable subData={row.subData || []} /> {/* Pass any additional data for SubSubTable */}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubTable;
