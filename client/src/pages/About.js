import React, { useState } from "react";
import { Container, Row } from "../components/Grid";

import ContactModal from "../components/ContactModal";
import SideNav from "../components/SideNav";
import RootContext from "../utils/RootContext";

import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "../components/Jumbotron/jumbotron";

function About() {
  const [contactOpen, setContactOpen] = useState(false);
  const [cycleTechTextClass, setCycleTechTextClass] = useState(true);
  const [rotatingText, setRotatingText] = useState([
    "React.js ",
    "SQL ",
    "MongoDB ",
    "Node.js ",
    "JWTs ",
  ]);

  function handleContactOpen() {
    setContactOpen(true);
  }

  function handleContactClose() {
    setContactOpen(false);
  }

  function handleClassChange() {
    if (cycleTechTextClass) setCycleTechTextClass(false);
    else setCycleTechTextClass(true);
  }

  // function handleTechTextRotation() {
  //   setInterval((document.getElementById('rotatingText2')) => {}, 3000);
  // }

  return (
    <Container fluid={true}>
      <RootContext.Consumer>
        {({ contactText, setContactText }) => (
          <SideNav
            activeContact={handleContactOpen}
            onHoverTextDisplay={contactText}
            changeContactText={setContactText}
          />
        )}
      </RootContext.Consumer>

      <Row center={true}>
        <Jumbotron fluid title={"About Me"}>
          {/* <div className="col-12"> */}
          <p class="rotatingText">
            <a onClick={handleClassChange}>
              <span
                className={`${cycleTechTextClass ? "centerMainRotate" : ""}`}
              >
                Technologies I know &hellip;&nbsp;{" "}
              </span>
              {rotatingText.map((value, index) => {
                return (
                  <span
                    key={index}
                    class={`${
                      cycleTechTextClass
                        ? "rotatingText-1 rotatingText-adjective"
                        : "rotatingText-adjective2"
                    }`}
                  >
                    {value}
                  </span>
                );
              })}
            </a>
          </p>
          {/* </div> */}
        </Jumbotron>
      </Row>
      <Row center={true}>
        <div className="content animated fadeInRight delay-1s col-xs-12 col-s-12 col-md-8 col-lg-8 col-xl-8">
          <div className="row p-2 align-items-end">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <img
                id="me"
                className="img-fluid"
                src="assets/images/IMG_5965.JPG"
                alt="This is me"
              ></img>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <p>
                My name is James Lovejoy and I am an aspiring web developer. I
                am learning html, CSS, and Bootstrap. What I love to do is solve
                problems. To quote the great Vanilla Ice
                <a
                  href="https://www.youtube.com/watch?v=rog8ou-ZepE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "If there's a problem yo, i'll solve it"
                </a>
                . Debugging code and implementing new concepts into an already
                existing design are the things that have really drawn me into
                the wide world of web development so far.
              </p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <p>
                I have a pretty diverse background beginning with a mechanical
                engineering degree, backed up with forensic engineering
                exerpience, time spent as a field staff for a wilderness therapy
                company in the deserts of Oregon (if you don't belive me that
                Oregon has deserts, i'd love to tell you about them!), and a
                short stint at a brewing company while I learned to code.
                There's a lot of science and problem solving in the making of
                beer too!
              </p>
              <p>
                Whether its working in a team or on my own I am your guy. I have
                the due deligience and work ethic to stay motivated and on
                schedule by myself. However, the communication skills I have
                developed and honed with my diverse background give me the
                ability to adapt to any team setting and fill in the gaps.
              </p>
            </div>
          </div>
        </div>
      </Row>
      <Row center={true}>
        <div className="card animated bounceInDown delay-2s text-white bg-dark text-center mt-2 w-75">
          <div className="card-header">
            Enjoy Some Photos I've Taken Myself!
          </div>
          <div className="card-body">
            <Carousel pauseOnHover={true} fade={true} wrap={true}>
              <Carousel.Item>
                <img
                  className="img-fluid rounded"
                  src="assets/images/Carousel/img_0001.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid rounded"
                  src="assets/images/Carousel/img_0002.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid rounded"
                  src="assets/images/Carousel/img_0003.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid rounded"
                  src="assets/images/Carousel/img_0004.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid rounded"
                  src="assets/images/Carousel/img_0005.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <ContactModal
          // modalClasses={"contactModal"}
          showContact={contactOpen}
          closeContact={handleContactClose}
        />
      </Row>
    </Container>
  );
}

export default About;
