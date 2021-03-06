import React, { useState } from "react";
import { Container, Row } from "../components/Grid";
import SideNav from "../components/SideNav";
import RootContext from "../utils/RootContext";

// import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Tooltip from "../components/Tooltip/tooltip";

function About() {
  // const [contactOpen, setContactOpen] = useState(false);
  const [cycleTechTextClass, setCycleTechTextClass] = useState(true);
  const [openTooltip, setOpenTooltip] = useState(false);
  const [rotatingText /*setRotatingText*/] = useState([
    "React.js ",
    "Redux",
    "Apollo",
    "Typescript",
    "GraphQL",
    "SQL ",
    "MongoDB ",
    "Node.js ",
    "JWTs ",
    "Ant-design",
    "Bootstrap",
    "Bulma",
    "Materialize",
    "Material-ui",
  ]);

  function handleTooltipOpen(event) {
    setOpenTooltip(true);
  }

  function handleTooltipClose(event) {
    setOpenTooltip(false);
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
        {({ contactText, setContactText, handleContactOpen }) => (
          <SideNav
            activeContact={handleContactOpen}
            onHoverTextDisplay={contactText}
            changeContactText={setContactText}
          />
        )}
      </RootContext.Consumer>

      <Row center={true}>
        <Jumbotron fluid title={"About Me"}>
          <p className="rotatingText">
            <button
              onClick={handleClassChange}
              onMouseEnter={handleTooltipOpen}
              onMouseLeave={handleTooltipClose}
              id="rotatingTextButton"
            >
              <span
                className={`${cycleTechTextClass ? "centerMainRotate" : ""}`}
              >
                Technologies I know &hellip;&nbsp;{" "}
              </span>
              {rotatingText.map((value, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      cycleTechTextClass
                        ? "rotatingText-1 rotatingText-adjective"
                        : "rotatingText-adjective2"
                    }`}
                  >
                    {cycleTechTextClass ? value : `${value}, `}
                  </span>
                );
              })}
              <hr />
              <Tooltip
                makeVisible={openTooltip}
                tooltipText={"Click to stop animation"}
              />
            </button>
          </p>
        </Jumbotron>
      </Row>
      <Row center={true} classes={"about-me-container p-5"}>
        <Container fluid={true}>
          <Row center={true}>
            <div className="card content animated fadeInRight delay-1s">
              <div className="card-body">
                <div className="row text-wrap">
                  <div className="col-lg-4 col-md-12 p-3">
                    <div className="card">
                      <img
                        id="me"
                        className="img-fluid float-left"
                        src={`https://res.cloudinary.com/jlovejo2/image/upload/v1597348985/Portfolio/IMG_5965_gt0ltp.jpg`}
                        alt="This is me"
                      ></img>
                      <div className="card-body">
                        <p className="card-text text-secondary">
                          Me repeling after setting a rock-climbing route in
                          Dragoon Mts in southern Arizona.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 p-3">
                    <p>
                      My name is James Lovejoy and I am an aspiring web
                      developer. I graudated from the NorthWestern
                      Webdevelopment Coding bootcamp in April and haven't
                      stopped learning since. I find coding to be a great outlet
                      and way to solve problems everday. To quote the great
                      Vanilla Ice &nbsp;
                      <a
                        href="https://www.youtube.com/watch?v=rog8ou-ZepE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "If there's a problem yo, i'll solve it"
                      </a>
                      . Debugging code and implementing new concepts into an
                      already existing design are the things that have really
                      drawn me into the wide world of web development so far.
                    </p>
                    <hr />
                    <p>
                      I have a pretty diverse background beginning with a
                      mechanical engineering degree, backed up with forensic
                      engineering exerpience, time spent as a field staff for a
                      wilderness therapy company in the deserts of Oregon (if
                      you don't belive me that Oregon has deserts, i'd love to
                      tell you about them!), and a short stint at a brewing
                      company while I learned to code. There's a lot of science
                      and problem solving in the making of beer too!
                    </p>
                  </div>
                  <div className="col-12 mt-2">
                    <p>
                      Whether its working in a team or on my own I am your guy.
                      I have the due deligience and work ethic to stay motivated
                      and on schedule by myself. However, the communication
                      skills I have developed and honed with my diverse
                      background give me the ability to adapt to any team
                      setting and fill in the gaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Row>
      {/* <div className="animated fadeInRight delay-1s col-xs-12 col-s-12 col-md-8 col-lg-8 col-xl-8">
          <div className="row p-2 align-items-end"></div>
          <div className="row p-2">
        </div> */}
      {/* <Row center={true}>
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
        </div> */}

      {/* </Row> */}
    </Container>
  );
}

export default About;
