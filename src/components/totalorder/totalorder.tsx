import React, { useEffect, useState } from "react";
import "./totalorder.css";

function TotalOrder() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    const orderData: any = localStorage.getItem("orderItem");
    if (orderData) {
      setOrders(JSON.parse(orderData));
    }
  };

  const clearOrders = () => {
    localStorage.removeItem("orderItem");
    setOrders([]);
  };

  return (
    <div className="total-order-container">
      <h2 className="total-order-title">Total Orders</h2>

      {orders.length > 0 ? (
        <>
          <table className="total-order-table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Dish Name</th>
                <th>Price (₹)</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order: any, index: number) => (
                <tr key={index}>
                  <td>{order.userId}</td>
                  <td>{order.item}</td>
                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="clear-order-btn" onClick={clearOrders}>
            Clear All Orders
          </button>
        </>
      ) : (
        <p className="total-order-empty">No Orders Yet</p>
      )}
    </div>
  );
}

export default TotalOrder;
