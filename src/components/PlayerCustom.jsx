import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const PlayerCustom = () => {
  const currentTrack = useSelector(
    (state) => state.currentTrackReducer.currentTrack
  );

  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-2">
        <Row>
          <Col xs={2}></Col>
          <Col
            xs={2}
            className="d-flex justify-content-center align-items-center text-light"
          >
            {currentTrack ? (
              <>
                <img
                  src={currentTrack.album.cover_small}
                  alt={currentTrack.title}
                  className="me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <p className="mb-0 fw-bold">{currentTrack.title}</p>
                  <small>{currentTrack.artist.name}</small>
                </div>
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col lg={8}>
            <Row className="justify-content-start align-items-center">
              <Col xs={4} md={6} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PlayerCustom;
