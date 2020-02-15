import React from 'react'

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
                        <p><a target="_blank" href="./assets/Alexa_H_Anthony_Resume_2019.pdf">View Resume</a></p>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <hr/>
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <img src="https://miro.medium.com/max/3150/1*sZ0ApCMiMpk6lwJ0XAmO1Q.jpeg" className="rounded float-left" */}
                                {/* alt="Alexa Anthony Headshot" style="width:310px;height:300px"/> */}
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