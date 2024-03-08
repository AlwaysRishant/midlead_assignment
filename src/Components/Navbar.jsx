import React, { useState } from "react";
import logo from "../Images/logo.jpeg";
import Footer from "../Components/Footer";
import Cardcontent from "./CardsContent";
export default function Navbar() {
  const [nav, setNav] = useState(true);
  const [fotter, setFotter] = useState(true);
  const [cardcontent, setCardcontent] = useState(true);
  return (
    <>
      <div id="navinc">
        {nav && (
          <nav
            id="navinc"
            className="navbar navbar-expand-lg bg-body-tertiary navprop w-100"
          >
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Bootstrap" width="150" height="150" />
            </a>
            <div className="container-fluid">
              <a className="navbar-brand m-lg-5" href="#">
                HOME
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active fw-bolder m-lg-5"
                      aria-current="page"
                      href="#"
                    >
                      DESIGNATIONS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder m-lg-5" href="#">
                      OUR SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder m-lg-5" href="#">
                      OUR BLOGS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder m-lg-5" href="#">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder m-lg-5" href="#">
                      ENQUIRE NOW _______
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
        {cardcontent && <Cardcontent setNav={setNav} setFotter={setFotter} />}
        {fotter && <Footer />}
      </div>
    </>
  );
}
