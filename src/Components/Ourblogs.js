import React, { Component } from "react";
import "../../src/StylingFiles/Ourblogs.css";
import zoom from "../Images/zoom.png";
import sun from "../Images/sun.png";
import moon from "../Images/moon.png";
export default function Ourblogs() {
  return (
    <>
      <nav class="navbar nav-8 navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Homepages
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Pages</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <li className="nav-item li-2 zoom">
                <a className="nav-link" href="#">
                  <span className="bg-success fs-5">NOTE&nbsp;&nbsp;</span>
                  <span id="next" className="fw-bolder">
                    {" "}
                    BOOK.
                  </span>
                </a>
              </li>
              <a className="nav-link zoom" href="#">
                <img className=" w-25" src={zoom} alt="not found" />
              </a>
              <li className="nav-item li-2 zoom">
                <a className="nav-link" href="#">
                  Contact&nbsp;&nbsp;
                </a>
              </li>
              <li className="nav-item dropdown li-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  En
                </a>
              </li>
              <a className="nav-link zoom" href="#">
                <img className=" w-25" src={sun} alt="not found" />
              </a>
              <a className="nav-link zoom" href="#">
                <img className=" w-25" src={moon} alt="not found" />
              </a>
              <button class="btn btn-outline-secondary zoom" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
