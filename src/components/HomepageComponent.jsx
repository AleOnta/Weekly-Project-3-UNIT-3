import { Col, Row } from "react-bootstrap";
import GenreRowComponent from "./GenreRowComponent";
import MainNavbarComponent from "./MainNavbarComponent";

const HomepageComponent = () => {
  return (
    <Col xs={10} className="mainPage">
      <Row className="justify-content-center">
        <MainNavbarComponent />
        <GenreRowComponent />
        <GenreRowComponent />
        <GenreRowComponent />
      </Row>
    </Col>
  );
};
export default HomepageComponent;
