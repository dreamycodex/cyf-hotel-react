import React from "react";

const SearchResult = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ms</td>
            <td>Apple</td>
            <td>Pie</td>
            <td>@mdo</td>
            <td>45632</td>
            <td>01/01/2020</td>
            <td>05/01/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ms</td>
            <td>Strawberry</td>
            <td>Cheescake</td>
            <td>@mdo</td>
            <td>45632</td>
            <td>01/01/2020</td>
            <td>05/01/2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mr</td>
            <td>Raspberry</td>
            <td>Trifle</td>
            <td>@mdo</td>
            <td>45632</td>
            <td>01/01/2020</td>
            <td>05/01/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
