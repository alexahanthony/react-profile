import React from 'react'
import './style.css'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1><strong>Contact</strong></h1>
                    </div>
                    <div className="col-md-8 text-right">
                        <p>e: alexahanthony@gmail.com   |   c: (425)213-4776 </p>
                    </div>
                </div>
                <hr/>
                    <form>
                        <div className="form-group">
                            <label for="formGroupExampleInput"/>
                                <p>Name</p>
                            
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name"/>
        
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1"/>
                                <p>Email Address</p>
                        
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
        </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1"/>
                                    <p>Message</p>
                            
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-dark">Submit</button>
      </form>
    </div>

            </div>
            )
}