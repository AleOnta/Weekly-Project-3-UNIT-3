import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { QueryFetcher } from "../redux/actions";
import GenreRowComponent from "./GenreRowComponent";
import MainNavbarComponent from "./MainNavbarComponent";
import SongCardSearchComponent from "./SongCardSearchComponent";

const HomepageComponent = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.homePageStore);
  const searchStore = useSelector((state) => state.searchPageStore);

  useEffect(() => {
    dispatch(QueryFetcher(searchStore.query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStore.query]);

  return (
    <Col xs={10} className="mainPage offset-2 ">
      <Row className="justify-content-center pb-5">
        <MainNavbarComponent />
        {searchStore.queryResult.length > 0 && (
          <Col xs={10} className="py-4">
            <div className="genre">
              <h2>Search Result</h2>
              <Row className="imgLinks py-3">
                {searchStore.queryResult.map((song) => {
                  return <SongCardSearchComponent song={song} key={song.id} />;
                })}
              </Row>
            </div>
          </Col>
        )}
        <GenreRowComponent toFetch="Rock" toMap={store.fetchedSongs.rockSongs} />
        <GenreRowComponent toFetch="Deep-house" toMap={store.fetchedSongs.deepHouseSongs} />
        <GenreRowComponent toFetch="Hip-hop" toMap={store.fetchedSongs.hipHopSongs} />
      </Row>
    </Col>
  );
};
export default HomepageComponent;
