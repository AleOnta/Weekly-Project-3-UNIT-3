import { Col, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_FROM_FAVOURITES, favouritesAction } from "../redux/actions";
import MainNavbarComponent from "./MainNavbarComponent";
import SingleSongComponent from "./SingleSongComponent";

const MyLibraryComponent = () => {
  const favouriteList = useSelector((state) => state.favourites.favouriteSongs);
  const dispatch = useDispatch();
  return (
    <>
      <Col xs={10} className="mainPage offset-2">
        <Row className="justify-content-center">
          <MainNavbarComponent />
          <Col xs={10}>
            <Row className="pb-5">
              <Col md={3} className="d-flex flex-column align-items-center pt-5">
                <div className="libraryImg d-flex flex-column justify-content-center m-0">
                  <h2>Your</h2>
                  <h2>Library</h2>
                </div>
                <p className="fav-text">Here your {favouriteList.length} favourites songs</p>
              </Col>
              <Col md={8} className="p-5">
                <Row>
                  {favouriteList?.length > 0 &&
                    favouriteList.map((song, i) => {
                      return (
                        <span className="libraryElement" key={song.id - 30}>
                          <BsXLg
                            className="favouriteIcon close"
                            key={song.id - 20}
                            onClick={() => dispatch(favouritesAction(DELETE_FROM_FAVOURITES, i))}
                          />
                          <img src={song.album.cover_small} alt="track cover" key={song.id - 10} />
                          <SingleSongComponent song={song} key={song.id} />
                        </span>
                      );
                    })}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default MyLibraryComponent;
