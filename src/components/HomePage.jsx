import { Container, Row } from "react-bootstrap";
import AsideCustom from "./AsideCustom";
import MainCustom from "./MainCustom";
import PlayerCustom from "./PlayerCustom";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <AsideCustom />
          <MainCustom />
        </Row>
      </Container>
      <PlayerCustom />
    </>
  );
};
export default HomePage;
