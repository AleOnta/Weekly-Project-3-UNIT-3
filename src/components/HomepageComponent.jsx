import { useEffect } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { QueryFetcher } from "../redux/actions";
import GenreRowComponent from "./GenreRowComponent";
import MainNavbarComponent from "./MainNavbarComponent";
import SongCardSearchComponent from "./SongCardSearchComponent";

const HomepageComponent = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.homePageStore);
  const searchStore = useSelector((state) => state.searchPageStore);
  const searchIsLoading = useSelector((state) => state.searchPageStore);

  useEffect(() => {
    if (searchStore.query.length > 0) {
      dispatch(QueryFetcher(searchStore.query));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStore.query]);

  return (
    <Col xs={10} className="mainPage offset-2 ">
      <Row className="justify-content-center pb-5">
        <MainNavbarComponent />
        {searchIsLoading.hasError !== "" && (
          <Col xs={6}>
            <Alert variant="danger">{"Error while loading the search, error --> " + searchIsLoading.hasError}</Alert>
          </Col>
        )}
        {searchIsLoading.isLoading === false && searchStore.queryResult.length > 0 && (
          <Col xs={10} className="py-4">
            <div className="genre">
              <h2>Search Result</h2>
              <Row xs={1} md={2} xl={4} className="imgLinks py-3">
                {searchStore.queryResult.map((song) => {
                  return <SongCardSearchComponent song={song} key={song.id} />;
                })}
              </Row>
            </div>
          </Col>
        )}
        {searchStore.isLoading === true && (
          <Col xs={10} className="py-4 d-flex flex-column align-items-center justify-content-around">
            <Spinner variant="success" className="spinner my-5" />
            <Spinner variant="success" className="spinner my-5" />
            <Spinner variant="success" className="spinner my-5" />
          </Col>
        )}
        <GenreRowComponent toFetch="Rock&Roll" toMap={store.fetchedSongs.rockSongs} />
        <GenreRowComponent toFetch="Deep-house" toMap={store.fetchedSongs.deepHouseSongs} />
        <GenreRowComponent toFetch="Hip-hop" toMap={store.fetchedSongs.hipHopSongs} />
      </Row>
    </Col>
  );
};
export default HomepageComponent;
