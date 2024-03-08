import React, {useState } from "react";
import "../../src/StylingFiles/error.css";
import error from "../Images/errorimg.jpeg";
import returnhome from "../Images/returnhome.jpeg";
import Navbar from "./Navbar";
export default function Error({ setBlogNav, setBlogcontent, setBlogfotter }) {
  const [home, setHome] = useState(true);
  return (
    <>
      {home && (
        <a
          onClick={() => {
            setBlogNav(false);
            setBlogcontent(false);
            setBlogfotter(false);
            setHome(false);
          }}
        >
          <img className="img-thumbnail img" src={error} alt="not found" />
          <img
            className="img-thumbnail img-1 img"
            src={returnhome}
            alt="not found"
            onClick={() => {
              window.location.reload();
            }}
          />
        </a>
      )}
      {!home && <Navbar />}
    </>
  );
}
