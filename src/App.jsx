import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import onTheToilet from "./assets/onTheToilet.JPG";
import nipple from "./assets/nipple.PNG";
import vod from "./assets/vod.mov";

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
                <div className="fullscreen-image home-layout">
                  <div className="home-text">
                    <h1>My name is Uzair</h1>
                    <p>
                      this is my website
                      <br />
                      I am married to ibrahim quraishi.
                      <br />
                      you can see him on the "my love" page
                    </p>
                  </div>
                  <img
                    src={onTheToilet}
                    alt="on the toilet"
                    className="home-image"
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
              path="/mylove"
              element={
                <div className="fullscreen-image">
                  <video
                    src={vod}
                    controls
                    autoPlay
                    loop
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                      margin: "auto",
                      background: "black",
                    }}
                  />
                </div>
              }
            />
            <Route
              path="/nipples"
              element={
                <div className="fullscreen-image">
                  <img
                    src={nipple}
                    alt="nipple"
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
