import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import GenreRowComponent from "./GenreRowComponent";
import MainNavbarComponent from "./MainNavbarComponent";

const HomepageComponent = () => {
  const store = useSelector((state) => state.homePageStore);
  return (
    <Col xs={10} className="mainPage offset-2">
      <Row className="justify-content-center">
        <MainNavbarComponent />
        <GenreRowComponent toFetch="Rock" toMap={store.fetchedSongs.rockSongs} />
        <GenreRowComponent toFetch="Deep-house" toMap={store.fetchedSongs.deepHouseSongs} />
        <GenreRowComponent toFetch="Hip-hop" toMap={store.fetchedSongs.hipHopSongs} />
      </Row>
    </Col>
  );
};
export default HomepageComponent;
