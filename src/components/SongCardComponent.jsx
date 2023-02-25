import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { favouritesAction, setAlbumFocusAction, setArtistQueryAction, SET_AS_FAVOURITE } from "../redux/actions";

const SongCardComponent = (props) => {
  const dispatch = useDispatch();
  const songs = props.toMap.slice(0, 4);

  return (
    <>
      {songs.map((song) => {
        return (
          <Col xs={1} sm={2} lg={3} className="text-center songContainer" key={song.id}>
            <Link to="/albumpage" onClick={(e) => dispatch(setAlbumFocusAction(song.album.id))}>
              <img className="img-fluid" src={song.album.cover_medium} alt="song cover" />
            </Link>
            <p className="d-flex flex-column">
              <span className="link-Button">
                <Link
                  to="/artistpage"
                  onClick={(e) => {
                    dispatch(setArtistQueryAction(song.artist.id));
                  }}
                >
                  Aritst: {song.artist.name}
                </Link>
                <BsHeart className="favouriteIcon" onClick={() => dispatch(favouritesAction(SET_AS_FAVOURITE, song))} />
              </span>
              <Link to="/albumpage" className="album-cap" onClick={(e) => dispatch(setAlbumFocusAction(song.album.id))}>
                Album: {song.album.title}
              </Link>
            </p>
          </Col>
        );
      })}
    </>
  );
};
export default SongCardComponent;
