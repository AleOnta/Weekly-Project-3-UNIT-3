import { Container, Row, Col } from "react-bootstrap";
import { BsShuffle, BsSkipBackwardFill, BsFillPlayFill, BsSkipForwardFill, BsArrowRepeat } from "react-icons/bs";

const PlayerComponent = () => {
  return (
    <Container fluid className="fixed-bottom py-0">
      <Row>
        <Col xs={10} className="py-0 offset-2 playerContainer d-flex flex-column">
          <Row className="d-flex flex-column align-items-center justify-content-center playerRow">
            <Col xs={6} md={4} lg={3}>
              <Row>
                <Col xs={12} className="p-0 pt-3 d-flex justify-content-around">
                  <BsShuffle className="player-icon" />
                  <BsSkipBackwardFill className="player-icon" />
                  <BsFillPlayFill className="player-icon" />
                  <BsSkipForwardFill className="player-icon" />
                  <BsArrowRepeat className="player-icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center playBar py-3">
            <Col xs={8} md={6} className="p-0 m-0">
              <div className="progress">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
