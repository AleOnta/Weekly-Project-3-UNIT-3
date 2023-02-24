import { Row, Col } from "react-bootstrap";
import SongCardComponent from "./SongCardComponent";
import { useDispatch } from "react-redux";
import { SongsFetcherAction } from "../redux/actions";
import { useEffect } from "react";

const GenreRowComponent = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SongsFetcherAction(props.toFetch, "https://striveschool-api.herokuapp.com/api/deezer/search?q="));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={10} className="py-4">
      <div className="genre">
        <h2>{props.toFetch}</h2>
        <Row className="imgLinks py-3" id={props.toFetch}>
          <SongCardComponent toMap={props.toMap} />
        </Row>
      </div>
    </Col>
  );
};

export default GenreRowComponent;
