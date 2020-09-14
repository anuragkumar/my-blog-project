import React from 'react';
import logo from './logo.svg';
import './App.css';
import FixedNavBar from "./home/components/FixedNavBar";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./home/Home";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <FixedNavBar/>
      {/*<Router>*/}
        {/*<div>*/}
          {/*<ul>*/}
            {/*<li>*/}
              {/*<Link to="/">Home</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/profile">Profile</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}

          {/*<hr />*/}

          {/*<Switch>*/}
            {/*<Route exact path="/">*/}
              {/*<Home/>*/}
            {/*</Route>*/}
            {/*<Route path="/profile">*/}
              {/*<Profile/>*/}
            {/*</Route>*/}
          {/*</Switch>*/}
        {/*</div>*/}
      {/*</Router>*/}
    </div>
  );
}

export default App;
