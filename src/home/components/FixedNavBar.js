import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Profile from "../../profile/Profile";
import Welcome from "../containers/Welcome";
import HomeProjects from "./HomeProjects";
import HomeQuote1 from "./HomeQuote1";
import HomeSkills from "./HomeSkills";
import HomeQuote2 from "./HomeQuote2";
import Footer from "../../footer";
import HomeBlogs from "./HomeBlogs";
import TemplatePage from "../../TemplatePage";

const FixedNavBar = () =>
    <div className="container-fluid">
        <Router>
            <nav className="navbar fixed-top bg-transparent navbar-expand-lg justify-content-lg-between navbar-light bg-dark">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon className="blog-icons" icon='robot' color="#17a2b8" size="2x"/>
                    <span className="ml-2 text-info">keep coding</span>
                </Link>
                <button className="navbar-toggler border-info" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav float-right ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">
                                <FontAwesomeIcon className="blog-nav-icons blog-icons" icon='blog' color="#17a2b8" size="lg"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                <FontAwesomeIcon className="blog-icons" icon='tasks' color="#17a2b8" size="lg"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                <FontAwesomeIcon className="blog-icons" icon='id-card' color="#17a2b8" size="lg"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                    <HomeProjects/>
                    <HomeQuote1/>
                    <HomeSkills/>
                    <HomeBlogs/>
                    <HomeQuote2/>
                    <Footer/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/blogs">
                    <TemplatePage/>
                </Route>
                <Route path="/projects">
                    <TemplatePage/>
                </Route>
            </Switch>
        </Router>
    </div>;

export default FixedNavBar;
