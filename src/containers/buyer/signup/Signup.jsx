import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { Row, Col, Container, Button, Form, Tabs, Tab } from "react-bootstrap";
import logo from "../../../assets/logo.svg";

function Signup(props) {
  const [user, setUser] = useState("buyer");

  useEffect(() => {
    setUser(props.location.params);
  }, []);

  return (
    <Container fluid>
      <Row className="frame">
        <Col sm={5} className="side">
          <Row className="hero-text">
            Break borders, order farm produce from markets all over Africa, and pay in your currency
          </Row>
          <Row className="hero"></Row>
        </Col>
        <Col sm={5} className=" d-flex flex-column flex-start main-content">
          <Row className="logo">
            <img src={logo} style={{ width: "9em", height: "1.6em" }} />
          </Row>
          <Row className="header justify-content-start">
            <p>Sign up on Farmex</p>
          </Row>
          <Row className="btn-row">
            <Button className="btn justify-content-center align-items-center" size="md" active>
              <span className="facebook">f</span>Sign up with facebook
            </Button>
          </Row>
          <Row>
            <Tabs
              id="controlled-tab-example"
              activeKey={user}
              onSelect={(k) => setUser(k)}
              variant="pills"
            >
              <Tab eventKey="seller" title="Seller"></Tab>
              <Tab eventKey="buyer" title="Buyer"></Tab>
            </Tabs>
          </Row>
          <Row>
            <Form>
              <Form.Row>
                <Form.Group as={Col} className="input-container" controlId="formGridEmail">
                  <Form.Control className="input-field" type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control className="input-field" type="text" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} className="input-container" controlId="formGridEmail">
                  <Form.Control className="input-field" type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group as={Col} className="input-container" controlId="formGridEmail">
                  <Form.Control className="input-field" type="email" placeholder="Email" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control className="input-field" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} className="input-container" controlId="formGridEmail">
                  <Form.Control className="input-field" type="number" placeholder="Phone Number" />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  id="customControlAutosizing"
                  className="check-field"
                  required
                  label="Creating an account means you're okay with our Terms of Service, privacy policy, and our default Notification Settings."
                  feedback="You must agree before submitting."
                  custom
                />
              </Form.Group>
              <Row className="action-btn-row">
                <Button className="login-btn" variant="primary" type="submit">
                  Create acount
                </Button>
                <span className="sign-in">
                  Already have an account ?{" "}
                  <Link to={{ pathname: "/", params: `${user}` }} className="signin-link">
                    {" "}
                    Login
                  </Link>
                </span>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Signup;
