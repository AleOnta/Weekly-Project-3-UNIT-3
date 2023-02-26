import { Row, Col, Spinner, Alert } from "react-bootstrap";
import SongCardComponent from "./SongCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { SongsFetcherAction } from "../redux/actions";
import { useEffect } from "react";

const GenreRowComponent = (props) => {
  const dispatch = useDispatch();
  const homepageStore = useSelector((state) => state.homePageStore);
  const isLoading = homepageStore.isLoading;
  const hasError = homepageStore.hasError;

  useEffect(() => {
    dispatch(SongsFetcherAction(props.toFetch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {hasError !== "" && (
        <Col xs={6}>
          <Alert variant="danger">{"Error while loading, error --> " + hasError}</Alert>
        </Col>
      )}
      {isLoading === true ? (
        <Col xs={10} className="py-5 d-flex flex-column align-items-center justify-content-around">
          <Spinner variant="success" className="my-5 spinner" />
        </Col>
      ) : (
        <Col xs={10} className="py-4">
          <div className="genre">
            <h2>{props.toFetch}</h2>
            <Row xs={1} md={2} xl={4} className="imgLinks py-3" id={props.toFetch}>
              <SongCardComponent toMap={props.toMap} />
            </Row>
          </div>
        </Col>
      )}
    </>
  );
};

export default GenreRowComponent;
