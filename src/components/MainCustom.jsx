import { Col, Row } from "react-bootstrap";
import FetchMusic from "./FetchMusic";

const MainCustom = () => {
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
                <h2>#HipHop</h2>
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
