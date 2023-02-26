import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsShuffle, BsSkipBackwardFill, BsFillPlayFill, BsSkipForwardFill, BsArrowRepeat } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllTracks } from "../redux/actions";

const PlayerComponent = () => {
  const playerStore = useSelector((state) => state.playerStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerStore.onPlay.currentlyPlaying) {
      dispatch(getAllTracks(playerStore.onPlay.currentlyPlaying.album.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerStore.onPlay.currentlyPlaying]);

  return (
    <Container fluid className="fixed-bottom py-0">
      <Row className="rowPlayerContainer">
        <Col xs={10} className="py-0 offset-2 playerContainer d-flex flex-column">
          <Row className="d-flex flex-column align-items-center justify-content-center playerRow">
            {playerStore.onPlay.currentlyPlaying && (
              <Col xs={2} className="d-flex align-items-center offset-2 playerDetailsContainer">
                <img src={playerStore.onPlay.currentlyPlaying.album.cover_small} alt="" className="playingImg me-3" />
                <div className="playerDetails">
                  <h4 className="m-0 p-0 pb-2">{playerStore.onPlay.currentlyPlaying.title.slice(0, 28)}</h4>
                  <p className="m-0 p-0">
                    {playerStore.onPlay.currentlyPlaying.artist.name} -
                    {playerStore.onPlay.currentlyPlaying.album.title.slice(0, 16)}
                  </p>
                </div>
              </Col>
            )}
            <Col xs={6} md={4} lg={3}>
              <Row>
                <Col xs={12} className="p-0 pt-3 d-flex justify-content-around">
                  <BsShuffle className="player-icon" />
                  <BsSkipBackwardFill className="player-icon" />
                  <BsFillPlayFill className="player-icon" />
                  <BsSkipForwardFill className="player-icon" />
                  <BsArrowRepeat className="player-icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center playBar py-3">
            <Col xs={8} md={6} className="p-0 m-0">
              <div className="progress">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
