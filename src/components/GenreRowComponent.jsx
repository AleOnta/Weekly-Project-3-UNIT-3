import { Row, Col } from "react-bootstrap";
import SongCardComponent from "./SongCardComponent";

const GenreRowComponent = () => {
  return (
    <Col xs={10} className="py-4">
      <div class="genre">
        <h2>Genre</h2>
        <Row className="imgLinks py-3" id="genreSection">
          <SongCardComponent />
        </Row>
      </div>
    </Col>
  );
};

export default GenreRowComponent;
