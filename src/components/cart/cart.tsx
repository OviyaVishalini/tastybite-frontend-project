import React, { useEffect, useState } from "react";
import "./cart.css";
import { Button, Card } from "react-bootstrap";
import CardImage from "../../assets/images/sandwich.jpg";
import { getUserRole } from "../../utils";

function Cart() {
  const userInfo = getUserRole();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    const stored = localStorage.getItem("cartItem");
    const parsed = stored ? JSON.parse(stored) : [];

    const filtered = parsed.filter((item: any) => item.userId === userInfo.id);
    setCartItems(filtered);
  };

  const removeCartItems = (data: any) => {
    // Remove visually
    const updatedList = cartItems.filter((item: any) => item.id !== data.id);
    setCartItems(updatedList);

    // Remove from localStorage but keep other users' data
    const stored = localStorage.getItem("cartItem");
    const parsed = stored ? JSON.parse(stored) : [];

    const finalList = parsed.filter((item: any) => item.id !== data.id);
    localStorage.setItem("cartItem", JSON.stringify(finalList));
  };

  const placeOrder = (data: any) => {
    const storedOrders = localStorage.getItem("orderItem");
    const orders = storedOrders ? JSON.parse(storedOrders) : [];

    const newOrder = {
      ...data,
      orderId: Date.now(),
      orderedBy: userInfo.id,
      orderedAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    localStorage.setItem("orderItem", JSON.stringify(orders));

    // Remove from cart after ordering
    removeCartItems(data);

    alert("Order placed successfully!");
  };

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        cartItems.map((item: any) => (
          <Card key={item.id} className="cart-card">
            <Card.Img variant="top" src={CardImage} className="cart-image" />
            <Card.Body>
              <Card.Title>{item.item}</Card.Title>
              <Card.Text>{item.des}</Card.Text>

              <div className="btn-section">
                <Button variant="danger" onClick={() => removeCartItems(item)}>
                  Remove
                </Button>

                <Button variant="success" onClick={() => placeOrder(item)}>
                  Place Order
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div className="cart-empty">No Cart Item</div>
      )}
    </div>
  );
}

export default Cart;
