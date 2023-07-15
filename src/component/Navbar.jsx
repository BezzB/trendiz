import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";
import { PiSignInBold } from "react-icons/pi";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar fixed-top sticky-top navbar-expand-sm bg-body-tertiary bg-white py-1 shadow-sm .navbar-expand{-sm|-md|-lg|-xl|-xxl}"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="/">
            <img
              src="hairlogo.PNG"
              alt="Trendiz-Hair"
              width="300"
              height="40"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">
                  About{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">
                  Contact{" "}
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a to="/login" className="btn btn-outline-light">
                <AiOutlineLogin className="me-1" /> Login
              </a>
              <a to="/register" className="btn btn-outline-light ms-2">
                <PiSignInBold className="me-1" /> Register
              </a>
              <a to="/cart" className="btn btn-outline-light ms-2">
                <BiSolidCart className="me-1" /> Cart (0){" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
