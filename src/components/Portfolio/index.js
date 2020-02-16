import React from 'react'
import './style.css'
import { BrowserRouter as Link } from 'react-router-dom'
import Weather from '../../assets/weather-app.png'
import Tread from '../../assets/treadlightly.png'
import Planner from '../../assets/day-planner.png'
import Password from '../../assets/password-generator.png'
import Pig from '../../assets/pig-e-bank.png'
import Code from '../../assets/code-quiz.png'
import Burger from '../../assets/burger-logger.png'
import Team from '../../assets/team-profile-generator.png'

export default function Portfolio() {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1><strong>Portfolio</strong></h1>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-md-4 col-sm-6 row-padding float-left">
            <div className="containerphoto">
              <img src={Weather} alt="Weather App Screen Shot" width="400px" height="250px"/>
              <div className="content">
                <h5><a target="_blank" href="https://alexahanthony.github.io/weather-app/?"><strong>Weather App</strong></a></h5>
                <h6><a target="_blank" href="https://github.com/alexahanthony/weather-app">Github Repo</a></h6>
              </div>
            </div>
          </div>
        
        <div className="col-md-4 col-sm-6  row-padding float-left">
          <div className="containerphoto">
            <img src={Planner} alt="Day Planner Screen Shot" width="400px" height="250px"/>
            <div className="content">
              <h5><a target="_blank" href="https://alexahanthony.github.io/Day-Planner/"><strong>Day Planner</strong></a></h5>
              <h6><a target="_blank" href="https://github.com/alexahanthony/Day-Planner">Github Repo</a></h6>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6  row-padding float-left">
            <div className="containerphoto">
              <img src={Password} alt="Password Generator Screen Shot" width="400px" height="250px"/>
              <div className="content">
                <h5><a target="_blank" href="https://alexahanthony.github.io/password-generator/"><strong>Password Generator</strong></a></h5>
                <h6><a target="_blank" href="https://github.com/alexahanthony/password-generator">Github Repo</a></h6>
              </div>
            </div>
          </div>

        <div class="col-md-4 col-sm-6  row-padding float-left">
          <div class="containerphoto">
            <img src={Pig} class="rounded float-left" alt="Kids Screen Time Tracker Screen Shot" width="400px" height="250px"/>
            <div class="content">
              <h5><a target="_blank" href="https://ajrsabet.github.io/Screen_Time_Tracker/"><strong>Kids Screen Time Tracker</strong></a></h5>
              <h6><a target="_blank" href="https://github.com/ajrsabet/Screen_Time_Tracker">GitHub Repo</a></h6>
            </div>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Code} class="rounded float-left" alt="Code Quiz Screen Shot" width="400px" height="250px"/>
              <div class="content">
                <h5><a target="_blank" href="https://alexahanthony.github.io/Code-Quiz/"><strong>Code Quiz</strong></a></h5>
                <h6><a target="_blank" href="https://github.com/alexahanthony/Code-Quiz">Github Repo</a></h6>
              </div>
            </div>
          </div>
        
        <div class="col-md-4 col-sm-6  row-padding float-left">
          <div class="containerphoto">
            <img src={Burger} class="rounded float-left" alt="Burger Logger" width="400px" height="250px"/>
            <div class="content">
              <h5><a target="_blank" href="https://glacial-bastion-68559.herokuapp.com/"><strong>Food Logger</strong></a></h5>
              <h6><a target="_blank" href="https://github.com/alexahanthony/burger-logger">Github Repo</a></h6>
            </div>
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Tread} class="rounded float-left" alt="developer profile" width="400px" height="250px"/>
              <div class="content">
                <h5><a target="_blank" href="https://tread-light.herokuapp.com/"><strong>Tread Lightly</strong></a></h5>
                <h6><a target="_blank" href="https://github.com/patorrad/treadLight">Github Repo</a></h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Team} class="rounded float-left" alt="team profile generator" width="400px" height="250px"/>
              <div class="content">
                <h5><a target="_blank" href="https://github.com/alexahanthony/team-profile-generator"><strong>Team Generator</strong></a></h5>
                <h6><a target="_blank" href="https://github.com/alexahanthony/team-profile-generator">Github Repo</a></h6>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>

  )
}