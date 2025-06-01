import { Link } from "react-router-dom";
import "./Navbar.css";
import blackhole from "../assets/blackhole.JPG";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={blackhole} alt="logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/mylove">my love</Link>
        <Link to="/nipples">my nipples</Link>
        <Link to="/body">my body</Link>
      </div>
    </nav>
  );
}

export default Navbar;
