import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNavbarComponent from "./components/LeftNavbarComponent";
import PlayerComponent from "./components/PlayerComponent";
import HomepageComponent from "./components/HomepageComponent";
import AlbumPageComponent from "./components/AlbumPageComponent";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="h-100 p-0">
        <Row className="h-100 m-0 d-flex flex-nowrap">
          <LeftNavbarComponent />
          <Routes>
            <Route path="/" element={<HomepageComponent />} />
            <Route path="/albumpage" element={<AlbumPageComponent />} />
          </Routes>
          <PlayerComponent />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
