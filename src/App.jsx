// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx'
import Nav from './components/templates/Nav.jsx';


const App = () => {
  
  return (
    <div className=''>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
