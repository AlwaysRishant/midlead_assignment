import React, { Component } from "react";
import img from "../Images/person1.png";
import social from "../Images/socialicon.png";
import "../../src/StylingFiles/footer.css";
import mess from "../Images/message.png";
import warn from "../Images/warning.png";
import rap from "../Images/rap1.jpeg";
import rap2 from "../Images/rap2.jpeg";
import tech from "../Images/tech.jpeg";
import emotion1 from "../Images/emotion1.jpeg";
import emotion2 from "../Images/emotion2.jpeg";
import holiday from "../Images/holiday.png";
export default function Ourblogcontent() {
  return (
    <>
      <div id="widinc">
        <h2>I created a Developer Rap Video - Here's What I Learned</h2>
        <div className="div-1">
          <img
            src={img}
            id="img-person"
            className="img-fluid imgsocial"
            alt="not found"
          />
          Jessica Koli | 02-December 2022
        </div>
        <img id="img-2" src={rap} className="img-fluid" alt="not found"></img>
        <br />
        <br />
        <p className="para-1">
          <br />
          In the heart of the city's rhythmic beat, I step onto the lyrical
          street. A concrete canvas where stories
          <br />
          unfold, each rhyme a tale, each tale gold. Spitting verses, sharp and
          bold, I'm the poet <br />
          in the urban code. From street corners to stages bright, my rhymes
          dance through the neon night. <br />
          In the city's rap symphony, my words echo, wild and free.
        </p>
        <h2>I created a Developer Rap Video - Here's What I Learned</h2>
        <p className="para-1">
          <br />
          In the heart of the city's rhythmic beat, I step onto the lyrical
          street. A concrete canvas where stories
          <br />
          unfold, each rhyme a tale, each tale gold. Spitting verses, sharp and
          bold, I'm the poet <br />
          in the urban code. From street corners to stages bright, my rhymes
          dance through the neon night. <br />
          In the city's rap symphony, my words echo, wild and free.
        </p>
        <table className="table table-info border-4 m-auto w-75">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p className="para-1">
          In the heart of the city's rhythmic beat, I step onto the lyrical
          street. A concrete canvas where stories
          <br />
          unfold, each rhyme a tale, each tale gold. Spitting verses, sharp and
          bold, I'm the poet <br />
          in the urban code. From street corners to stages bright, my rhymes
          dance through the neon night. <br />
          In the city's rap symphony, my words echo, wild and free.
        </p>
        <div className="div-2">
          <p className="para-2">
            <br />
            In the urban symphony, where beats never sleep,I craft my rhymes on
            the city's heartbeat. Concrete junglesecho with tales I've sown,
            each lyric, a narrative uniquely my own. From alleyways to skylines,
            my words take flight, painting stories against the canvas of the
            <br /> night. Metaphors dance, rhythms intertwine, a lyrical maze in
            the urban design. <br />
            Streets pulse with the energy I release, as I navigate the city's
            lyrical masterpiece.
            <br />.
          </p>
        </div>
        <p className="para-1">
          <br />
          In the heart of the city's rhythmic beat, I step onto the lyrical
          street.A concrete canvas where stories <br />
          Each verse is a journey, every line a street, I'm the poet in the rap,
          where stories meet. In the neon glow, my rhymes take flight,
          <br />
        </p>
        <h2>I created a Developer Rap Video - Here's What I Learned</h2>
        <p>
          In the heart of the city's rhythmic beat, I step onto the lyrical
          street.A concrete canvas where stories <br />
          I'm the poet in the rap, where stories meet. In the neon glow, my
          rhymes take flight{" "}
        </p>
        <p>
          1. Urban beats pulse, lyrical tales unfold, neon lights guide, rhymes
          never old.
        </p>
        <p>
          2. Urban beats pulse, lyrical tales unfold, neon lights guide, rhymes
          never old.
        </p>
        <p>
          3. Urban beats pulse, lyrical tales unfold, neon lights guide, rhymes
          never old.
        </p>
        <p>
          In the urban symphony, where beats never sleep, I craft my rhymes on
          the city's heartbeat. <br />
          Concrete jungles echo with tales I've sown, each lyric, a narrative
          uniquely my own.
        </p>
        <h2>I created a Developer Rap Video - Here's What I Learned</h2>

        <table className="table table-responsive table-4">
          <thead>
            <tr>
              <th scope="col">Step-1</th>
              <th scope="col" className=" text-primary">
                Step-2
              </th>
              <th scope="col" className=" text-primary">
                Step-3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Title Goes Here</th>
            </tr>
            <tr>
              <td>
                <p className="para-1">
                  In the urban symphony, where beats never sleep, I craft my
                  rhymes on the city's heartbeat. <br />
                  Concrete jungles echo with tales I've sown, each lyric, a
                  narrative uniquely my own. <br />
                  From alleyways to skylines, my words take flight, painting
                  stories against
                  <br /> the canvas of the night. Metaphors dance, rhythms
                  intertwine, a lyrical maze in the urban design.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container text-center mt-5">
          <hr className="my-4 w-50" />
          <img
            src={social}
            className="mx-2 img-thumbnail img-4"
            alt="not found"
          />
        </div>
        <h2 className="text-primary">See Related Post</h2>
        <div>
          <div className="card-group cardmain">
            <div className="card">
              <img src={rap} className="card-img-top img-5" alt="not found" />
              <div className="card-body">
                <h5 className="card-title">
                  Set Video playback speed with Javascript
                </h5>
                <div className="div-1">
                  <img
                    src={img}
                    id="img-person"
                    className="img-fluid imgsocial"
                    alt="not found"
                  />
                  Jessica Koli | 2 December
                </div>
                <p className="card-text">
                  <br />
                  the canvas of the night. Metaphors dance, <br />
                  rhythms intertwine, a lyrical maze in the urban design.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={rap2} className="card-img-top img-5" alt="not found" />
              <div className="card-body">
                <h5 className="card-title">
                  Set Video playback speed with Javascript
                </h5>
                <div className="div-1">
                  <img
                    src={img}
                    id="img-person"
                    className="img-fluid imgsocial"
                    alt="not found"
                  />
                  Jessica Koli | 2 December
                </div>
                <p className="card-text">
                  the canvas of the night. Metaphors dance, <br />
                  rhythms intertwine, a lyrical maze in the urban design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <table className="table table-2">
          <thead>
            <tr>
              <th scope="col">0 Comments</th>
              <th scope="col">themefisher</th>
              <th scope="col">Discuss Privacy</th>
              <th scope="col" colspan="5">
                Login
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src={social} className="img-thumbnail img-6" />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                {" "}
                <li className="nav-item dropdown li-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By Best
                  </a>
                  <ul className="dropdown-menu"></ul>
                </li>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src={img} className="img-thumbnail" id="img-person" />
              </th>
              <td colSpan={4}>
                <input
                  type="text"
                  placeholder="Start the Discussion....."
                  className="input-1"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={3}>
                Log In With
              </th>
              <td colSpan={2}>Sign up with Disqus</td>
            </tr>
            <tr>
              <th scope="row" colSpan={3}>
                <img src={social} className="img-thumbnail img-6" />
              </th>
              <td>
                <input
                  type="text"
                  placeholder="Name....."
                  className="input-1"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4 className="head-4">Be the First Comment Here</h4>
        <hr />
        <p className="fw-bolder">
          <img className="img-7" src={mess} alt="Not Found" />
          Subscribe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Disqus to your
          website &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="img-7" src={warn} alt="Not Found" />
          Do Not Self My Data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="disqus">DISQUS</span>
        </p>
      </div>
      <div className="w-25 div-8">
        <img src={rap} className="img-thumbnail img-8" alt="not found" />
        <img src={rap2} className="img-thumbnail img-8" alt="not found" />
        <img src={tech} className="img-thumbnail img-8" alt="not found" />
        <img src={emotion1} className="img-thumbnail img-8" alt="not found" />
        <img src={emotion2} className="img-thumbnail img-8" alt="not found" />
        <img src={holiday} className="img-thumbnail img-8" alt="not found" />
      </div>
    </>
  );
}
