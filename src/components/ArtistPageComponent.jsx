import { useEffect } from "react";
import { Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import {
  ArtistFetcher,
  ArtistSongsFetcher,
  favouritesAction,
  setAlbumFocusAction,
  setArtistQueryAction,
  SET_AS_FAVOURITE,
} from "../redux/actions";
import MainNavbarComponent from "./MainNavbarComponent";

const ArtistPageComponent = () => {
  const dispatch = useDispatch();
  const artistStore = useSelector((state) => state.artistPageStore);
  const favourites = useSelector((state) => state.favourites.favouritesId);

  useEffect(() => {
    dispatch(ArtistFetcher(artistStore.artistToFetch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistStore.artistToFetch]);

  useEffect(() => {
    if (artistStore.fetchedArtist.artistInfo.name !== "") {
      console.log(artistStore.fetchedArtist.artistInfo.name);
      dispatch(ArtistSongsFetcher(artistStore.fetchedArtist.artistInfo.name));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistStore.fetchedArtist.artistInfo.name]);

  return (
    <Col xs={10} className="mainPage offset-2">
      <Row className="justify-content-center pb-5">
        <MainNavbarComponent />
        <Col xs={10} className="text-center mb-5">
          <h2 className="title-name">{artistStore.fetchedArtist.artistInfo.name}</h2>
          <p id="followers">{artistStore.fetchedArtist.artistInfo.followers} followers</p>
          <div>
            <Button className="btn btn-success mr-2 mainButton d-inline me-1">PLAY</Button>
            <Button variant="none" className="btn btn-outline-light mainButton d-inline ms-1">
              FOLLOW
            </Button>
          </div>
        </Col>
        <Col xs={10}>
          <Row xs={1} sm={2} lg={3} xl={4} className="justify-content-center">
            {artistStore.hasError !== "" && (
              <Col xs={6}>
                <Alert variant="danger">
                  {"encountered an error while searching for the artist, error --> " + artistStore.hasError}
                </Alert>
              </Col>
            )}
            {artistStore.isLoading === false &&
              artistStore.fetchedArtist.artistSongs.length > 0 &&
              artistStore.fetchedArtist.artistSongs.map((song) => {
                return (
                  <Col className="text-center mb-4" key={song.id}>
                    <Link
                      to="/albumpage"
                      className="mainLinks"
                      onClick={() => dispatch(setAlbumFocusAction(song.album.id))}
                    >
                      <img className="img-fluid" src={song.album.cover_medium} alt="song cover" />
                    </Link>
                    <p className="d-flex flex-column">
                      <span className="link-Button">
                        <Link
                          className="track-cap"
                          to="/artistpage"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(setArtistQueryAction(song.artist.id));
                          }}
                        >
                          Track: {song.title_short}
                        </Link>
                        <BsHeartFill
                          className={`favouriteIcon ${favourites.includes(song.id) === true && "liked"}`}
                          onClick={() => dispatch(favouritesAction(SET_AS_FAVOURITE, song))}
                        />
                      </span>
                      <Link className="album-cap">Album: {song.album.title}</Link>
                    </p>
                  </Col>
                );
              })}
            {artistStore.isLoading === true && (
              <Col xs={10} className="my-5 d-flex justify-content-between align-items-center">
                <Spinner variant="success" className="spinner my-5" />
                <Spinner variant="success" className="spinner my-5" />
                <Spinner variant="success" className="spinner my-5" />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default ArtistPageComponent;
