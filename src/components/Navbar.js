import React from "react";
import logo from "../img/Qain-Logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg main-menu mt-5 col-md-10">
        <div className="container-fluid">
          <nav className="navbar col-md-8 info-nav">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <span className="col-md-12 d-flex">
                      <span className="icon">
                        <FaPhone />
                      </span>
                      <p className="me-md-1">+92-310-0909333</p>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span className="col-md-12 d-flex">
                      <span className="icon">
                        <FaEnvelope />
                      </span>
                      <p className="me-md-1">info@qainlogistics.com</p>
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span className="col-md-12 d-flex">
                      <span className="icon">
                        <FaClock />
                      </span>
                      <p className="me-md-1">Mon To Fri 9:00 AM – 5:00 PM</p>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span className="col-md-12 d-flex ml-2">
                      <FaFacebook />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span className="col-md-12 d-flex">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span className="col-md-12 d-flex">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <a className="navbar-brand" href="/">
            <span>
              <img
                id="logo"
                className="img-fluid"
                width="350px"
                height="110px"
                src={logo}
                alt="logo"
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse pt-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item page">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>Home</b>
                </a>
              </li>
              <li class="nav-item dropdown page">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Services</b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      <b>Sea Frieght</b>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      <b>Air frieght</b>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      <b>NVOC</b>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      <b>Land Transport</b>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item page">
                <a className="nav-link" href="/">
                  <b>About</b>
                </a>
              </li>
              <li className="nav-item page">
                <a className="nav-link" href="/">
                  <b>Contact</b>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary btn-menu" type="submit">
                <b>REQUSET A RATE</b>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
