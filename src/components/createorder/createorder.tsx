import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { hotelList } from "../../config";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./createorder.css";

function CreateOrder() {
  const [hotel, setHotel] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [menuItem, setMenuItemTable] = useState<any[]>([]);

  useEffect(() => {
    loadMenuItems();
  }, []);

  const loadMenuItems = () => {
    let items = localStorage.getItem("menuItem");
    if (items) {
      setMenuItemTable(JSON.parse(items));
    }
  };

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const createOrder = () => {
    let prev = localStorage.getItem("menuItem");
    let newMenuItem = {
      id: getRandomInt(1, 20000),
      item: item,
      price: price,
      hotelId: hotel,
    };

    if (prev) {
      localStorage.setItem(
        "menuItem",
        JSON.stringify([...JSON.parse(prev), newMenuItem])
      );
    } else {
      localStorage.setItem("menuItem", JSON.stringify([newMenuItem]));
    }

    loadMenuItems();
    setItem("");
    setPrice("");
    setHotel("");
  };

  const clearMenuItems = () => {
    localStorage.removeItem("menuItem");
    setMenuItemTable([]);
  };

  return (
    <div className="create-order-page">
      <div className="create-order-card">

        <h2 className="page-title">Create Menu Items</h2>

        <section className="create-order">

          <Form
            onSubmit={(event) => {
              event.preventDefault();
              createOrder();
            }}
            className="create-order-form"
          >
            {/* Hotel Select */}
            <Form.Group className="form-group">
              <Form.Label>Select Hotel</Form.Label>
              <Form.Select
                required
                value={hotel}
                onChange={(event) => setHotel(event.target.value)}
              >
                <option value="">Choose Hotel</option>
                {hotelList.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Menu Item */}
            <Form.Group className="form-group">
              <Form.Label>Menu Item</Form.Label>
              <Form.Control
                type="text"
                required
                value={item}
                onChange={(event) => setItem(event.target.value)}
              />
            </Form.Group>

            {/* Price */}
            <Form.Group className="form-group">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                required
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>

            {/* Buttons */}
            <div className="button-group">
              <Button variant="primary" type="submit">
                Add Menu Item
              </Button>

              <Button variant="danger" onClick={clearMenuItems}>
                Clear All Items
              </Button>
            </div>
          </Form>

          {/* Table */}
          {menuItem.length > 0 && (
            <div className="table-wrapper">
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hotel ID</th>
                    <th>Menu Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItem.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.hotelId}</td>
                      <td>{item.item}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default CreateOrder;
