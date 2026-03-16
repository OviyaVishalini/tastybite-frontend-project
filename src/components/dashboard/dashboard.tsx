import { hotelList } from "../../config";
import { getUserRole } from "../../utils";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DefaultImage from "../../assets/images/sandwich.jpg";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const userInfo = getUserRole();
  const navigate = useNavigate();

  const navigateToHotel = (hotelId: number) => {
    navigate(`/hotel-view/${hotelId}`);
  };

  // --------------------------
  // CUSTOMER VIEW (Hotel List)
  // --------------------------
  if (userInfo.role === "CUSTOMER") {
    return (
      <section className="dashboard-cus-hotel-list">
        {hotelList.map((item) => (
          <Card key={item.id} className="hotel-card">
            <Card.Img
              variant="top"
              src={item.image ? item.image : DefaultImage}
              className="hotel-card-img"
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.des}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigateToHotel(item.id)}
                style={{ marginBottom: "10px"}}
              >
                View More
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
    );
  }

  // ADMIN VIEW
  return (
    <div className="admin-dashboard-container main-content">
      <h2>Welcome, {userInfo.name} 👨‍🍳</h2>
      <h4>Restaurant Management Panel</h4>

      <div className="admin-actions">
        <Button
          variant="primary"
          onClick={() => navigate("/total-order")}
        >
          View Total Orders
        </Button>

        <Button
          variant="success"
          onClick={() => navigate("/create-order")}
        >
          Add / Manage Menu Items
        </Button>

        <Button
          variant="danger"
          onClick={() => {
            localStorage.removeItem("orderItem");
            alert("All Orders Cleared!");
            window.location.reload();
          }}
        >
          Clear All Orders
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;

