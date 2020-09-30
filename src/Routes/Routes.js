import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import history from '../history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Router>
        )
    }
}