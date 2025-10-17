import { Button, Col, Container } from "react-bootstrap";
import logo from "/assets/logo/logo.png";
import { Link } from "react-router";

const AsideCustom = () => {
  return (
    <>
      <aside>
        <Col>
          <nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <Container className="flex-column align-items-start">
              <Link to={"/"} className="navbar-brand">
                <img src={logo} alt="Spotify Logo" width="131" height="40" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        className="nav-item nav-link d-flex align-items-center"
                      >
                        <i className="bi bi-house-door-fill"></i>&nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link d-flex align-items-center"
                        to={"/"}
                      >
                        <i className="bi bi-book-fill"></i>&nbsp; Your Library
                      </Link>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary btn-sm h-100">
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>

            <div className="nav-btn">
              <button className="signup-btn" type="button">
                Sign Up
              </button>
              <button className="login-btn" type="button">
                Login
              </button>
              <div>
                <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
              </div>
            </div>
          </nav>
        </Col>
      </aside>
    </>
  );
};
export default AsideCustom;
