import React, { useState } from "react";
import "./login.css";
import Sandwich from "../../assets/images/login-image.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { users } from "../../config";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signIn = () => {
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("No user found with this email!");
      return;
    }

    if (user.pass !== password) {
      alert("Incorrect password!");
      return;
    }

    sessionStorage.setItem("userInfo", JSON.stringify(user));
    navigate("/dashboard");
    window.location.reload();
  };

  return (
    <div className="login-container">
      <section className="login-page">

        <h2 className="create-account-title">Sign In</h2>

        <section className="login-content">

          <section className="img-section">
            <img className="sandwich-img" src={Sandwich} alt="sandwich" />
          </section>

          <section className="login-form">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <Form.Group className="mb-3 d-grid" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </section>

        </section>
      </section>
    </div>
  );
};

export default Login;
