import React, { useState } from 'react';
import data from '../subSubdata.json';
import { MdModeEdit } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import './Table.css';

const SubSubTable = () => {
  const [clickedIcon, setClickedIcon] = useState(false);

  const handleIconClick = () => {
    setClickedIcon(!clickedIcon);
  }

  return (
    <>
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Task</th>
              <th>Assigned To</th>
              <th>Impact</th>
              <th>Duration <CiLocationArrow1 className="icon1" onClick={handleIconClick} /></th>
              {clickedIcon && (
                <>
                  <th>Assignee</th>
                  <th>Start Date</th>
                  <th>Deadline</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr className="tbl-body" key={index}>
                <td>
                  <MdModeEdit className='icon2' />
                  <FaCircle className='icon3' />
                  <FaSortDown className='icon4' />
                  <BiMessageRounded />
                </td>
                <td>{row.Task}</td>
                <td>{row.assigned}</td>
                <td>{row.impact}</td>
                <td>{row.duration}</td>
                {clickedIcon && (
                  <>
                    <td>{row.assigne}</td>
                    <td>{row.startDate}</td>
                    <td>{row.deadline}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SubSubTable;
