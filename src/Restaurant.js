import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div className="App-content">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
