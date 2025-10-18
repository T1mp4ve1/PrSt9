import { Col, Row } from "react-bootstrap";
import FetchMusic from "./FetchMusic";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeTrack } from "../redux/actions";

const MainCustom = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.musicReducer.searchRes);
  const likedTracks = useSelector((state) => state.musicReducer.likedTracks);

  return (
    <>
      <main>
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
          <Row>
            <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex mt-3">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>

          {searchResults && (
            <Row>
              <Col className="col-10">
                <div id="search-results" className="mb-4">
                  <h2>
                    Search result:
                    <span className="text-success">
                      {searchResults.artistName}
                    </span>
                  </h2>
                  <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                    {searchResults.tracks.slice(0, 4).map((track) => {
                      const isLiked = likedTracks?.[track.id];
                      <Col key={track.id} className="text-center p-2">
                        <img src={track.album.cover_medium} alt={track.title} />
                        <p className="mt-2 mb-0">
                          <strong>{track.title}</strong> <br />
                          <small>{track.artist.name}</small>
                        </p>
                        <button
                          onClick={() => dispatch(toggleLikeTrack(track.id))}
                          className="btn btn-sm"
                          style={{ color: isLiked ? "green" : "gray" }}
                        >
                          <i
                            className={
                              isLiked ? "bi bi-heart-fill" : "bi bi-heart"
                            }
                          ></i>
                        </button>
                      </Col>;
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          )}

          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  <FetchMusic artistName={"queen"} />
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                  <FetchMusic artistName={"katy perry"} />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-10">
              <div id="hiphop">
                <h2>HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  <FetchMusic artistName={"eminem"} />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </main>
    </>
  );
};
export default MainCustom;
