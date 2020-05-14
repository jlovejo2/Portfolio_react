import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootContext from "./utils/RootContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import Home from './pages/Home';
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { UnorderList, ListItem } from "./components/unorderedList";
import "./App.css";

function App() {
  const [contactText, setContactText] = useState("");

  return (
    <Router>
      <RootContext.Provider value={{ contactText, setContactText }}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={["/", "/about"]}>
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </div>
        <Footer
          childrenLeft={
            <div className="d-flex">
              <UnorderList
                bootStrapList={true}
                classes={"list-group-horizontal justify-content-center"}
              >
                <ListItem>
                  <p>
                    <FontAwesomeIcon
                      icon={faPhone}
                      size={"1x"}
                      color={"black"}
                    />
                    :&nbsp; 630 740-3285
                  </p>
                </ListItem>
                <ListItem>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={"1x"}
                      color={"black"}
                    />
                    :&nbsp; james.lovejoy2@gmail.com
                  </p>
                </ListItem>
              </UnorderList>
            </div>
          }
          childrenRight={
            <div className="d-flex">
              <UnorderList
                bootStrapList={true}
                classes={"list-group-horizontal justify-content-center"}
              >
                <ListItem classes="mr-2 ">
                  <a href="https://github.com/jlovejo2/">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size={"2x"}
                      color={"black"}
                    />
                  </a>
                </ListItem>
                <ListItem classes="mr-2">
                  <a href="https://www.linkedin.com/in/james-lovejoy-b414307a/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size={"2x"}
                      color={"blue"}
                    />
                  </a>
                </ListItem>
                <ListItem classes="">
                  <a href="assets/James_Lovejoy_FullStack_Resume.pdf">
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      size={"2x"}
                      color={"red"}
                    />
                  </a>
                </ListItem>
              </UnorderList>
            </div>
          }
        />
      </RootContext.Provider>
    </Router>
  );
}

export default App;
