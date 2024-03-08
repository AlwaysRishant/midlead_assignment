import React from "react";
import logo from "../Images/logo.jpeg";
import "../../src/StylingFiles/footer.css";
export default function Navbar() {
  return (
    <>
      <div class=" tablemar container mt-2 table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <ul className=" mt-3 dotnone fw-lighter">
                <li className=" mt-3">
                  <img src={logo} alt="Logo" width="150px" height="150px" />
                </li>
                <li className=" mt-3 text-primary fw-bold">DMC & B2B</li>
              </ul>
              <td>
                <span className="overflow">
                  Angantraya birdseye LLp -A Destination <br /> Management
                  Company&B2B Tour Company,
                  <br />
                  Package Supplier, travel management service <br />
                  like cultural packages ,Corporate Packages,Adventure <br />
                  Packages,Honeymoon Packages
                </span>
              </td>
              <td className=" fw-bolder">
                Company
                <ul className=" mt-3 dotnone fw-lighter">
                  <li className=" mt-3">Destinations</li>
                  <li className=" mt-3">Services</li>
                  <li className=" mt-3">Gallery</li>
                  <li className=" mt-3">About Us</li>
                </ul>
              </td>
              <td className=" fw-bolder">
                Contact
                <ul className=" mt-3 dotnone fw-lighter">
                  <li className=" mt-3">Partner with us</li>
                  <li className=" mt-3">carriers</li>
                </ul>
              </td>
              <td className=" fw-bolder">
                Meet Us
                <ul className=" mt-3 dotnone fw-lighter">
                  <li className=" mt-3">
                    +918883226229
                    <br />
                    (24/7, 356 days)
                  </li>
                  <li className=" mt-3">Services</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div classname="table-footer">
          <p>
            Designed and Developed By{" "}
            <span className=" text-primary">Midlead</span>
          </p>
          <p>@2023 Angantraya Birdseye LLP | All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
