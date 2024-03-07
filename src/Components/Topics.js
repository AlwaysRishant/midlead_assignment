import React, { useState } from "react";
import food from "../Images/food.png";
import nature from "../Images/nature.jpeg";
import photo from "../Images/photo.png";
import holiday from "../Images/holiday.png";
import lifestyle from "../Images/lifestyle.jpeg";
import tech from "../Images/tech.jpeg";
import Service from "../Components/Service";
import Blogcontent from "../Components/Ourblogcontent";
import Blogfotter from "../Components/Ourblogfotter";
import Blognav from "../Components/Ourblogs";
import Error from "../Components/Error";
import "../../src/StylingFiles/topics.css";
export default function Topics({ setNav, setFotter }) {
  const [topicdata, setTopicdata] = useState(true);
  const [service, setService] = useState(false);
  const [blognav, setBlognav] = useState(false);
  const [blogcontent, setBlogContent] = useState(false);
  const [blogfotter, setBlogFotter] = useState(false);
  const [error, setError] = useState(false);
  const Handlechange = () => {
    setTopicdata(false);
    setNav(false);
    setFotter(false);
    setBlognav(true);
    setError(true);
    setBlogFotter(true);
  };
  return (
    <>
      {service && <Service />}
      {blognav && <Blognav />}
      {blogcontent && <Blogcontent />}
      {error && <Error />}
      {blogfotter && <Blogfotter />}
      {topicdata && (
        <div className="card-group background-container m-auto">
          <h2 className="head">TOPICS</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div
                className="card cardcol eventclick1"
                onClick={() => {
                  setNav(false);
                  setTopicdata(false);
                  setFotter(false);
                  setBlognav(true);
                  setBlogContent(true);
                }}
              >
                <img
                  src={holiday}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Holiday</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card cardcol eventclick1"
                onClick={() => {
                  setTopicdata(false);
                  setService(true);
                }}
              >
                <img
                  src={tech}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Technology</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cardcol eventclick1" onClick={Handlechange}>
                <img
                  src={nature}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Nature</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cardcol eventclick1" onClick={Handlechange}>
                <img
                  src={photo}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Photography</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcol eventclick1" onClick={Handlechange}>
                <img
                  src={lifestyle}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Life Style</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card cardcol eventclick1" onClick={Handlechange}>
                <img
                  src={food}
                  className="card-img-top w-25 h-25 img-thumbnail img-2"
                  alt="not found"
                />
                <div className="card-body">
                  <h5 className="card-title">Food</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
