import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClicker = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClicker}>
            <i
              className={click ? "fas fa-times " : "fas fa-bars"}
              aria-hidden="true"
            />
          </div>
          <ul className={click ? "nav-menu active " : "nav-menu"}>
            <li className="nav-item">
              <Link to="/your" className="nav-links" onClick={closeMobileMenu}>
                Your
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blocked"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blocked
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
