import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container main-nav flex">
          <Link to="/" className="company-logo">
            <img src="image/asset 1.png" alt="company logo" />
          </Link>
          <div className="nav-linkds">
            <ul className="flex">
              <li>
                <Link to="/" className="hover-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover-links">
                  Product
                </Link>
              </li>
              <li>
                <a href="/" className="hover-links">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover-links">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover-links secondary-button">
                  Sign in
                </a>
              </li>
              <li>
                <a href="/" className="hover-links primary-button">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
