import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbarComponent = () => {
  return (
    <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
      <Link>TRENDING</Link>
      <Link>PODCAST</Link>
      <Link>MOODS AND GENRES</Link>
      <Link>NEW RELEASES</Link>
      <Link>DISCOVER</Link>
    </Col>
  );
};
export default MainNavbarComponent;
