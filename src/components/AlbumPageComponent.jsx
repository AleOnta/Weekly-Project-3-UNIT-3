import { useEffect } from "react";
import { Row, Col, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AlbumSongsFetcher } from "../redux/actions";
import MainNavbarComponent from "./MainNavbarComponent";
import SingleSongComponent from "./SingleSongComponent";

const AlbumPageComponent = () => {
  const albumStore = useSelector((state) => state.albumPageStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AlbumSongsFetcher(albumStore.albumToFetch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumStore.albumToFetch]);

  return (
    <Col xs={10} className="mainPage offset-2">
      <Row className="justify-content-center">
        <MainNavbarComponent />
        {albumStore.hasError !== "" && (
          <Col xs={6}>
            <Alert variant="danger">{"error encountered while loading, error --> " + albumStore.hasError}</Alert>
          </Col>
        )}
        {albumStore.isLoading === false && albumStore.fetchedAlbum && (
          <Col xs={10}>
            <Row className="pb-5">
              <Col md={3} className="text-center pt-5" id="img-container">
                <img className="img-fluid" src={albumStore.fetchedAlbum.cover} alt="album cover" />
                <Row>
                  <Col xs={12}>
                    <p className="album-title pt-3">{albumStore.fetchedAlbum.songs[0].album.title}</p>
                  </Col>
                  <Col xs={12}>
                    <p className="artist-name">{albumStore.fetchedAlbum.songs[0].artist.name}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={8} className="p-5">
                <Row>
                  {albumStore.fetchedAlbum.songs.map((song) => {
                    return <SingleSongComponent song={song} key={song.id} />;
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
        )}
        {albumStore.isLoading === true && (
          <Col xs={10} className="d-flex justify-content-around aling-items-center mt-5 pt-5">
            <Spinner variant="success" className="spinner my-5" />
            <Spinner variant="success" className="spinner my-5" />
          </Col>
        )}
      </Row>
    </Col>
  );
};
export default AlbumPageComponent;
