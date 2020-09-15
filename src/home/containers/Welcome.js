import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/style.css";
import {Typewriter} from "../containers/Typewriter";

class Welcome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    data = ["echo 'Hello World!'", "sudo su", "./create-website", "rm -rf /", "Just Kidding!!"];

    render() {
        return (
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-left text-info">
                        <div className="card h-100 justify-content-center bg-dark border-dark">
                            <div>
                                <div className="card-body bg-dark">
                                    <h1 className="card-title display-1">WELCOME <br/> I am Light Bot</h1>
                                    <p className="card-text">Sometimes we need push, sometimes we push ourselves!</p>
                                    <a href="https://www.linkedin.com/in/kumaranurag2/" target="_blank" rel="noopener noreferrer" className="btn btn-dark text-light blog-button">hire me</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-left">
                        <div className="card h-100 justify-content-center bg-dark border-dark">
                            <div className="text-nowrap">
                                <h1 className="display-4 text-white">
                                    <FontAwesomeIcon
                                        icon="terminal"
                                        color="#17a2b8"
                                        size="1x"/> &nbsp;
                                    <Typewriter data={this.data}/>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;
