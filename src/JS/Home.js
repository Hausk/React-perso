import { Component } from 'react';
import '../CSS/index.css';
import '../CSS/App.css';
import './Test.js';
import { Link, Switch } from "react-router-dom";

export default class Home extends Component {

  render() {
    
    return (
      <div className="home">
      
        <div className="page_controllers">
          <nav>
            <ul>
              <li>Accueil</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="hamburger_menu">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="ribbon"></div>
          <div className="right_controller">
            <Link to="/portfolio" activeClassName="active">
              <div title="Vers mon portfolio" className="next">
                <span>Portfolio</span>
                <em></em>
              </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="content-container" id="homepage">
            <div className="main_text">
              <h3>Hello, I'm Jonathan</h3>
              <h1>I am an student full-stack web developer.</h1>
              <h2>You can take a look at my github repository.</h2>
              <p>Feel free to take a look at my latest projects on the web portfolio page.</p>
              <address>You can contact me at dbessa.jonathan@gmail.com<span className="underscore_tap">_</span></address>
              
            </div>
            <div className="social">
              <ul id="social-media">
                <li><a className="github" target="_blank" rel="noreferrer" href="https://github.com/hausk" title="Suivez moi sur Github"><span>Suivez moi sur Github</span></a></li>
                <li><a className="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathan-bessa/" title="Suivez moi sur linkedin"><span>Suivez moi sur Github</span></a></li>
                <li><a className="cv" target="_blank" rel="noreferrer" href="https://github.com/hausk" title="Jetez un oeil"><span>Suivez moi sur Github</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}