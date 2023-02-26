import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favouritesAction, setAlbumFocusAction, setArtistQueryAction, SET_AS_FAVOURITE } from "../redux/actions";
import { BsHeartFill } from "react-icons/bs";

const SongCardSearchComponent = ({ song }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favouritesId);

  return (
    <Col className="text-center" key={song.id}>
      <Link to="/albumpage" onClick={() => dispatch(setAlbumFocusAction(song.album.id))}>
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
            Artist: {song.artist.name}
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
};
export default SongCardSearchComponent;
