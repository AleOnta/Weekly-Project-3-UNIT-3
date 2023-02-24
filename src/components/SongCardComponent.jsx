import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SongCardComponent = () => {
  return (
    <Col xs={1} sm={2} lg={3} className="text-center" id="">
      <Link>
        <img className="img-fluid" src="" alt="" />
      </Link>
      <p className="d-flex flex-column">
        <Link>Aritst: </Link>
        <Link>Album</Link>
      </p>
    </Col>
  );
};
export default SongCardComponent;
