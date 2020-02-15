import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Weather from '../../assets/weather-app.png'
import Tread from '../../assets/treadlightly.png'
import Planner from '../../assets/day-planner.png'
import Password from '../../assets/password-generator.png'
import Pig from '../../assets/pig-e-bank.png'
import Code from '../../assets/code-quiz.png'
import Burger from '../../assets/burgerlogger.png'
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
        <hr />
        <div className="row">
          <div className="col-md-4 col-sm-6  row-padding float-left">
            <div className="containerphoto">
              <img src={Weather} alt="Weather App Screen Shot"/>
              <div className="content">
                <h5><Link to="https://alexahanthony.github.io/weather-app/?" /><strong>Weather App</strong></h5>
                <h6><Link to="https://github.com/alexahanthony/weather-app" />Github Repo</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6  row-padding float-left">
          <div className="containerphoto">
            <img src={Planner} alt="Day Planner Screen Shot" />
            <div className="content">
              <h5><Link to="https://alexahanthony.github.io/Day-Planner/" />Day Planner</h5>
              <h6><Link to="https://github.com/alexahanthony/Day-Planner" />Github Repo</h6>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6  row-padding float-left">
            <div className="containerphoto">
              <img src={Password} alt="Password Generator Screen Shot" />
              <div className="content">
                <h5><Link to="https://alexahanthony.github.io/password-generator/" />Password Generator</h5>
                <h6><Link to="https://github.com/alexahanthony/password-generator" />Github Repo</h6>
              </div>
            </div>
          </div>

        </div>
        <div class="col-md-4 col-sm-6  row-padding float-left">
          <div class="containerphoto">
            <img src={Pig} class="rounded float-left" alt="Kids Screen Time Tracker Screen Shot" />
            <div class="content">
              <h5><Link to="https://ajrsabet.github.io/Screen_Time_Tracker/" />Kids Screen Time Tracker</h5>
              <h6><Link to="https://github.com/ajrsabet/Screen_Time_Tracker" />GitHub Repo</h6>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Code} class="rounded float-left" alt="Code Quiz Screen Shot" />
              <div class="content">
                <h5><Link to="https://alexahanthony.github.io/Code-Quiz/" />Code Quiz</h5>
                <h6><Link to="https://github.com/alexahanthony/Code-Quiz" />Github Repo</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6  row-padding float-left">
          <div class="containerphoto">
            <img src={Burger} class="rounded float-left" alt="Burger Logger" />
            <div class="content">
              <h5><Link to="https://glacial-bastion-68559.herokuapp.com/" />Food Logger</h5>
              <h6><Link to="https://github.com/alexahanthony/burger-logger" />Github Repo</h6>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Tread} class="rounded float-left" alt="developer profile" />
              <div class="content">
                <h5><Link to="https://tread-light.herokuapp.com/" />Tread Lightly</h5>
                <h6><Link to="https://github.com/patorrad/treadLight" />Github Repo</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6  row-padding float-left">
            <div class="containerphoto">
              <img src={Team} class="rounded float-left" alt="team profile generator" />
              <div class="content">
                <h5><Link to="https://github.com/alexahanthony/team-profile-generator" />Team Generator</h5>
                <h6><Link to="https://github.com/alexahanthony/team-profile-generator" />Github Repo</h6>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>

  )
}