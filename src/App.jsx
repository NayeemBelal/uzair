import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import onTheToilet from "./assets/onTheToilet.JPG";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="fullscreen-image">
                  <img
                    src={onTheToilet}
                    alt="on the toilet"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                </div>
              }
            />
            <Route
              path="/cheeks"
              element={<div className="fullscreen-image">Cheeks Content</div>}
            />
            <Route
              path="/nipples"
              element={<div className="fullscreen-image">Nipples Content</div>}
            />
            <Route
              path="/body"
              element={<div className="fullscreen-image">Body Content</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
