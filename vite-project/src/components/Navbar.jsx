import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">EXPENSE TRACKER</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
