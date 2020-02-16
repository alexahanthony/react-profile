import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from './components/Contact'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      
        <h1>Alexa's React Portfolio</h1>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path = '/'>
              <Profile/>
            </Route>
            <Route path='/about'>
              <Profile/>
            </Route>
            <Route path ='/contact'>
              <Contact/>
            </Route>
            <Route path='/portfolio'>
              <Portfolio/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
