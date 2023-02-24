import { Col } from "react-bootstrap";

const SingleSongComponent = ({ song }) => {
  return (
    <Col md={10} className=" trackList trackHover">
      <div className="trackHover py-3">
        <a href="#song" className="trackHover ">
          {song.title}
        </a>
        <p className="duration">{"0" + (song.duration / 60).toString().slice(0, 4)}</p>
      </div>
    </Col>
  );
};
export default SingleSongComponent;
