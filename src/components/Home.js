import React from "react";
import "../styles/App.css";
import drivers from '../startup_data/drivers.json'

const renderTableData = () => {

      return (
        <>
        {renderTableHeader()}

        {drivers.map((driver) => {
         const { key, Name, Nationality, RaceNumber } = driver; //destructuring
         return (
           <tr className="table-row">
             <td id={key} className="table-data">{RaceNumber}</td>
             <td id={key} className="table-data">{Name}</td>
             <td id={key} className="table-data">{Nationality}</td>
           </tr>
         );
      })}
        </>

      )
   }

  const renderTableHeader = () => {
return (    
      <tr>
      <th>Race Number</th>
      <th>Name</th>
      <th>Nationality</th>
    </tr>)
  }



function Home() {
  return (
    <div>
      <div className="table">
        <table className="table-body">
          <tbody>
          {renderTableData()}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
