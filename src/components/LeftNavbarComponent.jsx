import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { BsHouseDoorFill, BsBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuerySearchAction } from "../redux/actions";

var Logo = require("../assets/img/Spotify_Logo.png");

const LeftNavbarComponent = () => {
  const dispatch = useDispatch();
  const [queryInput, setQueryInput] = useState("");

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  };

  return (
    <Col xs={3} md={2} className="h-100 p-0 left-nav">
      <Row className="h-100 flex-column left-nav-row">
        <Col xs={12} className="p-0 d-flex justify-content-start left-top-nav">
          <img src={Logo} alt="Spotify Logo" className="logo" />
        </Col>
        <Col xs={12} className="p-0 d-flex flex-column justify-content-between left-main-nav">
          <Row xs={12} className="d-flex flex-column">
            <Col className="pb-3  d-flex align-items-center">
              <BsHouseDoorFill className="left-nav-icon" />
              <Link to="/" className="nav-link-custom">
                Home
              </Link>
            </Col>
            <Col className="pt-1 pb-4 d-flex align-items-center">
              <BsBookFill className="left-nav-icon" />
              <Link to="/mylibrary" className="nav-link-custom">
                Your Library
              </Link>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <InputGroup className="mb-3" id="navInput">
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient Search"
                  aria-describedby="basic-addon2"
                  value={queryInput}
                  onChange={(e) => handleChange(e)}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(setQuerySearchAction(queryInput));
                  }}
                >
                  GO
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row xs={12} className="d-flex flex-column">
            <Col className="p-0 d-flex justify-content-center">
              <Button className="btn signup-btn">Sign Up</Button>
            </Col>
            <Col className="p-0 d-flex justify-content-center">
              <Button className="btn login-btn">Login</Button>
            </Col>
            <Col className="p-0 d-flex nav-btn">
              <a href="#cookie">Cookie Policy</a>
              <a href="#privacy">Privacy</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default LeftNavbarComponent;
