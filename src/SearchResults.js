import React from "react";
import moment from "moment";

const SearchResult = props => {
  return (
    <div className="results">
      <table class="table">
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
              <tr>
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
