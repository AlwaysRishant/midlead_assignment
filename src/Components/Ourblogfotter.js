import React, { Component } from "react";
import "../../src/StylingFiles/Ourblogs.css";
import social from "../Images/socialicon.png";
import "../../src/StylingFiles/footer.css";
export default function Ourblogfotter() {
  return (
    <>
      <div class="container mt-5 table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <ul className=" mt-3 dotnone fw-lighter">
                <li className=" mt-3 fw-bold">
                  <span className="bg-success fs-5">NOTE</span>
                  <span className=" fw-bolder"> BOOK.</span>
                </li>
                <li className=" fw-bolder">
                  <br />
                  Did you come here for
                  <br /> something in particular or <br />
                  just general riker
                </li>
              </ul>
              <td className="fw-bolder">
                <span className="blog">Blogs</span>
                <ul className=" mt-3 dotnone fw-lighter">
                  <li className=" mt-3">Travel</li>
                  <li className=" mt-3">Technology</li>
                  <li className=" mt-3">Lifestyle</li>
                  <li className=" mt-3">Fashion</li>
                  <li className=" mt-3">Business</li>
                </ul>
              </td>
              <td className=" fw-bolder">
                <span className="quick">Quick Links</span>
                <ul className=" mt-3 dotnone fw-lighter">
                  <li className=" mt-3">Facts</li>
                  <li className=" mt-3">Terms and Conditions</li>
                  <li className=" mt-3">Support</li>
                  <li className=" mt-3">Privacy Policy</li>
                </ul>
              </td>
              <td className=" fw-bolder">
                Subscribe for NewsLetters
                <ul className=" mt-3 dotnone fw-lighter">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                  <li className=" mt-3">Follows On:</li>
                  <img
                    src={social}
                    className="img-fluid imgsocial"
                    alt="not found"
                  />
                  <li></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <p>
            Designed and Developed By{" "}
            <span className=" text-primary">Midlead</span>
          </p>
        </div>
      </div>
    </>
  );
}
