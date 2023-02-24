import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlbumFocusAction } from "../redux/actions";

const SongCardComponent = (props) => {
  const dispatch = useDispatch();
  const songs = props.toMap.slice(0, 4);

  return (
    <>
      {songs.map((song) => {
        return (
          <Col xs={1} sm={2} lg={3} className="text-center" key={song.id}>
            <Link to="/albumpage" onClick={() => dispatch(setAlbumFocusAction(song.album.id))}>
              <img className="img-fluid" src={song.album.cover_medium} alt="song cover" />
            </Link>
            <p className="d-flex flex-column">
              <Link>Aritst: {song.artist.name}</Link>
              <Link className="album-cap">Album: {song.album.title}</Link>
            </p>
          </Col>
        );
      })}
    </>
  );
};
export default SongCardComponent;
