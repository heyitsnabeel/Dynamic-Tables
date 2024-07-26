import React, { useState } from "react";
import data from "../data.json";
import "./Table.css";
import { FaAngleDown } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import SubTable from "./SubTable";


const Table = () => {
  const [clickedRow, setClickedRow] = useState(null);
  const [clickedIcon, setClickedIcon] = useState(false);

  const handleIconClick = () => {
    setClickedIcon(!clickedIcon);
  };

  const handleRowClick = (index) => {
    setClickedRow(index === clickedRow ? null : index); // Toggle the clicked row
  };

  const allSum = [];
  const sum2=[];
  const sum3=[];
  const sum4=[];
  const sum5=[];

  for (let i = 0; i < data.length; i++) {
    let sum = 0;
    let sum_2=0;
    let sum_3=0; 
    let sum_4=0; 
    let sum_5=0; 
    for (let j = 0; j < data[i].subTable.length; j++) {
      const totalTask = parseInt(data[i].subTable[j].TotalTask, 10);
      const Progress = parseInt(data[i].subTable[j].Progress,10);
      const Pipeline = parseInt(data[i].subTable[j].Pipeline,10);
      const Review = parseInt(data[i].subTable[j].Review,10);
      const unassigned = parseInt(data[i].subTable[j].unassigned,10);

      sum += totalTask;
      sum_2 += Progress; 
      sum_3 += Pipeline; 
      sum_4 += Review; 
      sum_5 += unassigned; 
    }
    allSum.push(sum);
    sum2.push(sum_2)
    sum3.push(sum_3)
    sum4.push(sum_4)
    sum5.push(sum_5)
  }

  return (
    <div className="container border box my-4">
      <table className="table table-striped">
        <thead >
          <tr >
            <th >S.No</th>
            <th>Department</th>
            <th>
              Total Task
              <CiLocationArrow1 className="icon1" onClick={handleIconClick} />
            </th>
            {clickedIcon && (
              <>
                <th><GoDotFill className="icon5" />In Progress</th>
                <th><GoDotFill className="icon3" />In Pipeline</th>
                <th><GoDotFill className="icon6" />For Review</th>
                <th><GoDotFill className="icon4" />Unassigned</th>
              </>
            )}
          </tr>

        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="tbl-body" onClick={() => handleRowClick(index)}>
                <td>{row.id}</td>
                <td>{row.Department}<FaAngleDown className="icon1" /></td>
                <td>{allSum[index]}</td>
                {clickedIcon && (
                  <>
                   <td>{sum2[index]}</td>
                    <td>{sum3[index]}</td>
                    <td>{sum4[index]}</td>
                    <td>{sum5[index]}</td>
                  </>
                )}
              </tr>
              {clickedRow === index && (
                <tr>
                  <td colSpan="7">
                    <SubTable subData={row.subTable || []} /> {/* Pass the subTable data */}
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

export default Table;
