import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { BsHouseDoorFill, BsBookFill } from "react-icons/bs";

var Logo = require("../assets/img/Spotify_Logo.png");

const LeftNavbarComponent = () => {
  return (
    <Col xs={3} md={2} className="h-100 p-0 left-nav">
      <Row className="h-100 flex-column left-nav-row">
        <Col xs={12} className="p-0 d-flex justify-content-start left-top-nav">
          <img src={Logo} alt="Spotify Logo" className="logo" />
        </Col>
        <Col xs={12} className="p-0 d-flex flex-column justify-content-between left-main-nav">
          <Row xs={12} className="d-flex flex-column">
            <Col className="pb-1  d-flex align-items-center">
              <BsHouseDoorFill className="left-nav-icon" />
              <a href="#home" className="nav-link-custom">
                Home
              </a>
            </Col>
            <Col className="pt-1 pb-4 d-flex align-items-center">
              <BsBookFill className="left-nav-icon" />
              <a href="library" className="nav-link-custom">
                Your Library
              </a>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <InputGroup className="mb-3">
                <Form.Control placeholder="Search" aria-label="Recipient Search" aria-describedby="basic-addon2" />
                <Button variant="outline-secondary" id="button-addon2">
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
/* <nav class="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
            <div class="nav-container">
              <a class="navbar-brand" href="index.html">
                <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <ul>
                    <li>
                      <a class="nav-item nav-link" href="./index.html"><i class="fas fa-home fa-lg" aria-hidden="true"></i>&nbsp; Home </a>
                    </li>
                    <li>
                      <a class="nav-item nav-link" href="#"><i class="fas fa-book-open fa-lg" aria-hidden="true"></i>&nbsp; Your Library</a>
                    </li>
                    <li>
                      <div class="input-group mt-3">
                        <input type="text" class="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
                        <div class="input-group-append" style="margin-bottom: 4%">
                          <button class="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onclick="search()">
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="nav-btn">
              <button class="btn signup-btn" type="button">Sign Up</button>
              <button class="btn login-btn" type="button">Login</button>
              <a href="#">Cookie Policy</a> |
              <a href="#"> Privacy</a>
            </div>
          </nav> */
