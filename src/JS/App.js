import React, { Component } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Notfound from './Notfound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/portfolio" component={Portfolio}/>
                </Switch>
            </Router>
        )
    }
}
