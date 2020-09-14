import React from 'react';
import NavBar from "../home/components/NavBar";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../style/style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Typewriter} from "../home/containers/Typewriter";
import Footer from "../footer";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    testMethod = () => {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-left text-info">
                        <div className="card h-100 justify-content-center bg-dark border-dark">
                            <div>
                                <div className="card-body">
                                    <h1 className="display-4 font-italic">
                                        When you don't create things,
                                        you become defined by your tastes rather than ability. So create.</h1>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Why The Lucky Stiff</cite>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-left bg-dark">
                        <div className="card h-100 justify-content-center bg-dark border-dark">
                            <div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="card-img shadow p-3 mb-5 rounded" src={require("../static/images/pp.jpg")} />
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-group list-group-flush blog-profile-info text-white">
                                                <li className="list-group-item bg-dark"><span className="font-italic blog-var-const">const</span> Anurag Kumar</li>
                                                <li className="list-group-item bg-dark"><span className="font-italic blog-var-var">var</span> Software Developer & Machine Learning Engineer</li>
                                                <li className="list-group-item bg-dark"><span className="font-italic blog-var-const">const from</span> India</li>
                                                <li className="list-group-item bg-dark"><span className="font-italic blog-var-const">const</span> Passionate</li>
                                                <li className="list-group-item bg-dark"><span className="font-italic blog-var-echo">echo</span> "Mixed breed of software development and machine learning,
                                                    interested in distributed systems and end-to-end ML applications"</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                        <div className="card border-0">
                            <h1 className="display-1">Certifications</h1>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <div className="card border-0">
                            <h1 className="display-3 card-header"><code>null pointer exception</code></h1>
                            <div className="card-body">
                                <code>
                                    try &#123;<br/>
                                    &emsp; certExamPrep(); <br/>
                                    &emsp; certExamExecute(); <br/>
                                    &#125; <br/>
                                    catch() &#123; <br/>
                                    &emsp; keepTrying(); <br/>
                                    &#125;
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-white">
                        <h1 className="display-4 d-inline-block">Worked at Dell EMC, <small className="text-muted">Bangalore, KA, India</small></h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">

                                </div>
                                <div className="col-8">
                                    <code>
                                        Storage Servers, ISCSI Protocol, Python, Python GUI, Object Oriented Tool Design,
                                        Regression, Sanity, Smoke Testing, Web Application Tool Development, Linux,
                                        RedHat, CentOS, SVN, Jenkins, Bash, Shell Scripting, GIT, Automation, Manual Testing,
                                        Maintenance Release Quality Testing, Rest APIs, PHP, Storage Servers, Network,
                                        IP Address and Subnet Mask Address, CRONJOB, Performance Testing, Disk Qualification
                                        Testing, Excel, Internal Tool Distributed System Design, MongoDB, MySQL, Java
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-white">
                        <h1 className="display-4 d-inline-block">Worked at Acacia Communications, <small className="text-muted">Maynard, MA, USA</small></h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">

                                </div>
                                <div className="col-8">
                                    <code>
                                        C/C++, C#, Python, Web Tool Development, Regression Automation Testing, PostgresSQL,
                                        MongoDB, MongoDB Database Design, Replication, Load Balancing, Linux, Server Hosting,
                                        Collaborative Development, Perforce, GitFusion, System Design, Requirement Analysis,
                                        Angular 9, Python Flask, Microservices, Rest APIs, Build and Deploy, Common Application
                                        Programming Interface, Custom Payload HTTP Headers, Socket Connections in C++,
                                        Low-Level System Development, OOPS, Unit Testing, Memory design, Ring Buffer,
                                        File Upload/Download, State Machine, GUI Design
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white">
                    <h1 className="display-1">Education</h1>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <h2 className="">Northeastern University <small className="text-muted">Boston, MA, USA</small></h2>
                            </div>
                            <div className="col-8">
                                <div className="card border-0">
                                    <div className="card-header">
                                        <code>Master's in Data Science</code>
                                    </div>
                                    <div className="card-body">
                                        <code className="card-text text-dark">
                                            Supervised Machine Learning, Data Processing in R, Web Development, Algorithms,
                                            Deep Learning, Unsupervised Machine Learning, Information Visualization (Capstone),
                                            Fundamentals of Cloud Computing
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h2 className="">Sir M. Visvesvaraya Institute
                                    of Technology <small className="text-muted">Bangalore, KA, India</small></h2>
                            </div>
                            <div className="col-8">
                                <div className="card border-0">
                                    <div className="card-header">
                                        <code>BE in Computer Science Engineering</code>
                                    </div>
                                    <div className="card-body">
                                        <code className="card-text text-dark">
                                            Programming in C/C++, Algorithms, Data Structure, Database Design Systems,
                                            Compiler Design, Logic Design, Computer Networks, Computer Graphics, Java,
                                            Web Development, Mathematics, Linear Algebra, Statistics, Probability
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bg-dark text-white">
                        <div className="card bg-dark text-center border-0">
                            <h1 className="display-3">Lives in</h1>
                            <div className="card-body">
                                <div className="card-text">Boston, Massachusetts, United States of America</div>
                                <div className="card-text"><small>From Agra, Uttar Pradesh, India</small></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Profile;
