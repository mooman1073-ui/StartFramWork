/** @format */

import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top py-3 '>
        <div className='container'>
           <Link
          className={`navbar-brand fs-2 fw-bold text-white ${activeLink === "/" ? "" : ""}`}
          to="/"
          onClick={() => setActiveLink("/")}
        >
          START FRAMEWORK
        </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div
            className='collapse navbar-collapse'
            id='navbarNav'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className={`nav-link fw-bold text-uppercase me-4 text-white ${
                    activeLink === "/about" ? "isActive" : ""
                  }`}
                  to='/about'
                  onClick={() => setActiveLink("/about")}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link fw-bold text-uppercase me-4 text-white ${
                    activeLink === "/portfolio" ? "isActive" : ""
                  }`}
                  to='/portfolio'
                  onClick={() => setActiveLink("/portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link fw-bold text-uppercase  text-white ${
                    activeLink === "/contact" ? "isActive" : ""
                  }`}
                  to='/contact'
                  onClick={() => setActiveLink("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
