import { Container, Row, Col } from "react-bootstrap";

const PlayerComponent = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={10} className="offset-2 playerContainer"></Col>
      </Row>
    </Container>
  );
};
