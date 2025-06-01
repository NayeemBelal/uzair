import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/cheeks">my cheeks</Link>
        <Link to="/nipples">my nipples</Link>
        <Link to="/body">my body</Link>
      </div>
    </nav>
  );
}

export default Navbar;
