import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './JS/reportWebVitals';
import './CSS/index.css';
import App from './JS/App';
import { BrowserRouter as Router, Route} from "react-router-dom";




ReactDOM.render(
  
  <Router>
      <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
