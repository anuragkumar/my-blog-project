import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../style/style.css';
import FixedNavBar from "./components/FixedNavBar";
import Welcome from "./containers/Welcome";
import HomeProjects from "./components/HomeProjects";
import HomeQuote1 from "./components/HomeQuote1";
import HomeSkills from "./components/HomeSkills";
import HomeBlogs from "./components/HomeBlogs";
import HomeQuote2 from "./components/HomeQuote2";
import Footer from "../footer";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Profile from "../profile/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    testMethod = () => {

    }

    componentDidMount() {
        // call any services
        // got some data
    }

    render() {
        return (
            <div className="bg-dark mt-5">
                <FixedNavBar/>
            </div>
        )
    }
}

export default Home;
