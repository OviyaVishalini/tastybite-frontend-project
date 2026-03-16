import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { hotelList } from "../../config";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardImage from "../../assets/images/sandwich.jpg";
import "./hotelview.css";
import { getUserRole } from "../../utils";


function Hotelview() {
  const userInfo = getUserRole();
  const params = useParams();
  const [hotel, setHotel] = useState<any>(null);
  const [hotelMenuItem, setHotelMenuItem] = useState([]);
 
//const store = useSelector((state) => state);

  useEffect(() => {
    const filter = hotelList.find((item: any) => item.id === params.id);
    setHotel(filter);
    getItemForHotel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getItemForHotel = () => {
    const menuItems = localStorage.getItem("menuItem");
    const parsed = JSON.parse(menuItems || "[]");
    const filtered = parsed.filter((item: any) => item.hotelId === params.id);
    setHotelMenuItem(filtered);
  };

  const AddToCart = (menuItem: any) => {
    const prev = localStorage.getItem("cartItem");

    if (prev) {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([
          ...JSON.parse(prev),
          { ...menuItem, userId: userInfo.id },
        ])
      );
    } else {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([{ ...menuItem, userId: userInfo.id }])
      );
    }
  };

  return (
    <div className="hotel-view-page">
      <div className="hotel-view-inner">

        {hotel && (
          <>
            <p className="hotel-view-title">{hotel.name}</p>
            <p className="hotel-view-sub">Menu Items</p>

            <div className="hotel-view">
              {hotelMenuItem.length > 0 ? (
                hotelMenuItem.map((item: any) => (
                  <Card key={item.id} className="hotel-card">
                    <Card.Img variant="top" src={CardImage} />
                    <Card.Body>
                      <Card.Title>{item.item}</Card.Title>
                      <Card.Text>{item.des}</Card.Text>

                      <Button variant="primary" onClick={() => AddToCart(item)}>
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="hotel-empty-msg">No menu items available.</p>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Hotelview;
