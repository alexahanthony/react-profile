import React from "react";
import FormInput from "../FormInput/index"
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
                <hr />
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput" />
                        <FormInput />
                    </div>
                </form>
            </div>

        </div>
    )
}