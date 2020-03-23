import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
