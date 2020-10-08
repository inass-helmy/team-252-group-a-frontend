import React, {useState} from 'react';
import './Login.css'
import {Row, Col, Container, Button, Form, Tabs, Tab} from 'react-bootstrap'
import logo from '../../../assets/logo.svg'

function Login() {
  const [key, setKey] = useState('buyer');

  return(
    <Container fluid >
    <Row className="frame">
    <Col sm={5} className="side">
      <Row className="hero-text">Break borders, order farm produce from markets all over Africa, and pay in your currency</Row>
      <Row className="hero"></Row>
    </Col>
    <Col sm={4} className=" d-flex flex-column flex-start main-content">
      <Row className="logo">
      <img src={logo} style={{width:"9em", height:"1.6em"}}/>
      </Row>
      <Row className="header justify-content-start">
        <p>Login to Farmix</p>
      </Row>
      <Row className="btn-row">
      <Button className="btn justify-content-center align-items-center" size="md" active>
      <span className="facebook">f</span>Sign up with facebook</Button> 
      <span className="or">or</span>
      </Row>
      <Row>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      variant= "pills"
    >
      <Tab  eventKey="seller" title="Seller" >
      </Tab>
      <Tab eventKey="buyer" title="Buyer">
      </Tab>
      </Tabs>
      </Row>
      <Row>
      <Form>
  <Form.Group className="input-container" controlId="formBasicEmail">
    <Form.Control className="input-field" type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
    <Form.Control className="input-field" type="password" placeholder="Password" />
  </Form.Group>
  <Button className="login-btn" variant="primary" type="submit">
    Login
  </Button>
</Form>
      </Row>
  <Row className="sign-up">
  Don't have an account yet? <a className="signup-link"> Sign Up</a>
  </Row>
    </Col>
   
  </Row>
 
   </Container>
  )
}
export default Login