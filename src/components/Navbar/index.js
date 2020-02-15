import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <Link to='/'></Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/portfolio'>Portfolio</Link>

{/* 
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
          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <h5>About </h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                <h5>Portfolio </h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                <h5>Contact</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
</nav> */}
        </div> 
    )
}