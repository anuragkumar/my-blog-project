import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey, faTerminal, faBlog, faTasks, faIdCard, faRobot, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import Home from "./home/Home";

library.add(fab, faEnvelope, faKey, faTerminal, faBlog, faTasks, faIdCard, faRobot, faFireAlt);

ReactDOM.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
