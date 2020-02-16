import React from 'react'
import {Link} from "react-router-dom"
import './style.css'

export default function Navbar() {
    return (
        <div>
            <Link to='/'></Link>
         <div className="container"> 
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d-flex">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-4 nav-name">
            <a className="navbar-brand" href="index.html">
              <h3><strong>Alexa Anthony</strong></h3>
            </a>
          </div>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <ul className="navbar-nav text-right text-white">
            <li className="nav-item nav-link text-white">
            <Link to='/about'><h5>About </h5></Link>
                
            </li>
            <li className="nav-item nav-link">
              <Link to='/portfolio'> <h5>Portfolio </h5></Link>
              
            </li>
            <li className="nav-item nav-link">
            <Link to='/contact'><h5>Contact</h5></Link>
                
            </li>
          </ul>
        </div>
      </div>
</nav>
</div>
        </div> 
    )
}