import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  const [highlightedRows, setHighlightedRows] = useState([]);

  function clickOnTableRow(event) {
    const bookingId = Number(event.currentTarget.id);
    console.log(bookingId);

    if (highlightedRows.includes(bookingId)) {
      //exclude bookingId from highlightedRows
      setHighlightedRows(highlightedRows.filter(id => id !== bookingId));
    } else {
      //include bookingId to highlightedRows
      setHighlightedRows(highlightedRows.concat(bookingId));
    }
  }

  return (
    <div className="results">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">No. of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((info, index) => {
            return (
              <tr
                id={info.id}
                className={
                  highlightedRows.includes(info.id) ? "table-active" : " "
                }
                onClick={clickOnTableRow}
                key={index}
              >
                <th scope="row">{info.id}</th>
                <td>{info.title}</td>
                <td>{info.firstName}</td>
                <td>{info.surname}</td>
                <td>{info.email}</td>
                <td>{info.roomId}</td>
                <td>{info.checkInDate}</td>
                <td>{info.checkOutDate}</td>
                <td>
                  {moment(info.checkOutDate).diff(
                    moment(info.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
