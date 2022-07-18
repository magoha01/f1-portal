import React from "react";
import "../styles/App.less";

// const renderTableHeader = () => {
//   return (
//     <thead className="table-head">
//       <tr>
//         <th>Race Number</th>
//         <th>Name</th>
//         <th>Nationality</th>
//       </tr>
//     </thead>
//   );
// };



// const renderTableData = () => {

//   return (
//     <>
//       {drivers.map((driver) => {
//         const { Name, Nationality, RaceNumber } = driver; //destructuring
//         return (
//           <tr className="table-row">
//             <td id={RaceNumber} className="table-data">
//               {RaceNumber}
//             </td>
//             <td id={RaceNumber} className="table-data">
//               {Name}
//             </td>
//             <td id={RaceNumber} className="table-data">
//               {Nationality}
//             </td>
//           </tr>
//         );
//       })}
//     </>
//   );
// };


function Home({race}) {
  return (
    <div>
      <div>
        <h2>Home</h2>
      </div>
      {/* <table className="table">
        {renderTableHeader()}
        <tbody className="table-body">{renderTableData()}</tbody>
      </table> */}
    </div>
  );
}

export default Home;
