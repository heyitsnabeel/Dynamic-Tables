// import React, { useState } from "react";
// import data from './data.json';

// const Table = () => {

//   const allSum=[];

   
//     const allDatas = [];
    
//     for (let i = 0; i < data.length; i++) {
//       var sum = 0;
//       for (let j = 0; j < data[i].subTable.length; j++) {
//         const totalTask = parseInt(data[i].subTable[j].TotalTask, 10);
        
//         sum += totalTask;
//         console.log(sum)
        
//         allDatas.push(totalTask);
//       }
//       allSum.push(sum)
//     }
    
//   console.log("data",allSum)
//   return (
//     <div>
//       <h1>Total Tasks</h1>
      
//       <ul> 
//       {
//         allSum.map((data,index)=>(
//           <li>{data}</li>
//         ))
//       }
//       </ul>
//     </div>
//   );
// };

// export default Table;
import React, { useState } from 'react';
import data from './data.json';
import { GoDotFill } from "react-icons/go";

const SubTable = () => {
  const [clickedRow, setClickedRow] = useState(null);

  const handleRowClick = (index) => {
    setClickedRow(index === clickedRow ? null : index); // Toggle the clicked row
  };

  return (
    <div className='container'> 
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Department</th>
            <th>Total Task</th>
            <th><GoDotFill className='icon5'/> In Progress</th>
            <th><GoDotFill className='icon3'/> In Pipeline</th>
            <th><GoDotFill className='icon6'/> For Review</th>
            <th><GoDotFill className='icon4'/> Unassigned</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <React.Fragment key={i}>
              <tr onClick={() => handleRowClick(i)}>
                <td>{i + 1}</td>
                <td>{d.Department}</td>
                <td>{d.TotalTask}</td>
                <td>{d.InProgress}</td>
                <td>{d.InPipeline}</td>
                <td>{d.ForReview}</td>
                <td>{d.Unassigned}</td>
              </tr>
              {clickedRow === i && (
                <tr>
                  <td colSpan="7">
                    <table>
                      <thead>
                        <tr>
                          <th>Sub-Task</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {d.subTable.map((sub, idx) => (
                          <tr key={idx}>
                            <td>{sub.SubTaskName}</td>
                            <td>{sub.Status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default SubTable