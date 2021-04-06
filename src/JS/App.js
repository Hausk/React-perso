import React, { Component } from 'react';
import '../CSS/index.css';
import Home from './Home';
import Portfolio from './Portfolio';
import NotFound from './Notfound';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Cv from './Cv';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Content () {
    const location = useLocation()

    return (
      <div className='fill content'>
        <TransitionGroup>
          <CSSTransition
            timeout={1300}
            classNames='fade'
            key={location.key}
          >
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/about-me" component={Aboutme}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/cv" component={Cv} />
              <Route path='*' component={NotFound}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <Router>
                <Content />
            </Router>
        )
    }
}