import React from "react";
import Order from "./Order";

const Restaurant = props => {
  return (
    <div className="App-content">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
