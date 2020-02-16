import React from 'react'
import './style.css'
import Resume from '../../assets/Alexa_H_Anthony_Resume_2019.pdf'
import Alexa from '../../assets/alexa.jpg'

export default function Profile() {
    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-sm-4">
                        <h1><strong>About Me</strong></h1>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-4 text-right">
                        <a href={Resume}  target="_blank"><strong>View Resume</strong></a>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <hr/>
                    <div className="row">
                        <div className="col-sm-12 rounded float-left">
                        <img src={Alexa} alt="Alexa Headshot" width="500px" height="500px"/>
                                <p>Alexa Anthony is the CEO of Magic Ai Corp., a computer vision-based machine learning company that
                                  collects
                                  and analyzes data on animal behavior. Alexa is a passionate and driven entrepreneur with a successful
                                  track-record in fundraising and sales. As a former Division 1 athlete in Equestrian, Alexa trained and
      competed at the highest level of show jumping internationally.</p>

                                <p>Prior to founding Magic AI, Alexa worked for the Intellectual Ventures Incubator where she sourced
                                  Entrepreneurs in Residence, and participated in the start-up and spin-out process of early-stage
                                  technology
                                  companies. Additionally, she worked on investor relations, corporate development projects, and licensing
      transactions.</p>

                                <p>Alexa is passionate about networking, deal development, and creating strategic opportunities. Alexa has a
                                  B.A. from the University of South Carolina where she was an NCAA Division 1 athlete and holds four
                                  Division
                                  1 championship rings in Equestrian.
      {/* <a target="_blank" href="https://www.linkedin.com/in/alexahanthony/">View Linked-in Profile.</a> */}
                                </p>

  </div>
                        </div>

                    </div>
            </div>
            )
}