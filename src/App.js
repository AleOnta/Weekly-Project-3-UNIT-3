import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNavbarComponent from "./components/LeftNavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="h-100 p-0">
        <LeftNavbarComponent />
        <Row>
          <Routes>
            <Route />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
