import React, { useState } from "react";
import rap1 from "../Images/rap1.jpeg";
import rap2 from "../Images/rap2.jpeg";
import emo1 from "../Images/emotion1.jpeg";
import emo2 from "../Images/emotion2.jpeg";
import Topics from "../Components/Topics";
import "../../src/StylingFiles/cardcontent.css";
export default function CardsContent({ setNav, setFotter }) {
  const [topic, setTopic] = useState(false);
  const [card, setCard] = useState(true);
  return (
    <>
      {topic && <Topics setNav={setNav} setFotter={setFotter} />}
      {card && (
        <div className="textleft">
          <p className=" fw-bolder">Discover the World With Us</p>
          <hr />
          <div className="card mb-3">
            <div
              className="row g-0 eventclick"
              onClick={() => {
                setTopic(true);
                setCard(false);
              }}
            >
              <div className="col-md-4">
                <img
                  src={emo1}
                  className="img-fluid rounded-start"
                  alt="not found"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Design is the mix of Emotions</h5>
                  <p className="card-text">
                    Jesica Koli | 02 December |3 Min. To Read
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      did you come here for something in particular or just
                      general Riker - bashing ?And blowing into
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div
                className="row g-0 eventclick"
                onClick={() => {
                  setTopic(true);
                  setCard(false);
                }}
              >
                <div className="col-md-4">
                  <img
                    src={emo2}
                    className="img-fluid rounded-start"
                    alt="not found"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Design is the mix of Emotions
                    </h5>
                    <p className="card-text">
                      Jesica Koli | 02 December |3 Min. To Read
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        did you come here for something in particular or just
                        general Riker - bashing ?And blowing into
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div
                className="row g-0 eventclick"
                onClick={() => {
                  setTopic(true);
                  setCard(false);
                }}
              >
                <div className="col-md-4">
                  <img
                    src={rap1}
                    className="img-fluid rounded-start"
                    alt="not found"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      I created a Rap Video Here I learned
                    </h5>
                    <p className="card-text">
                      Jesica Koli | 02 December |3 Min. To Read
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        did you come here for something in particular or just
                        general Riker - bashing ?And blowing into
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div
                className="row g-0 eventclick"
                onClick={() => {
                  setTopic(true);
                  setCard(false);
                }}
              >
                <div className="col-md-4">
                  <img
                    src={rap2}
                    className="img-fluid rounded-start"
                    alt="not found"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      I created a Rap Video Here I learned
                    </h5>
                    <p className="card-text">
                      Jesica Koli | 02 December |3 Min. To Read
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        did you come here for something in particular or just
                        general Riker - bashing ?And blowing into
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
