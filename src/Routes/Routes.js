import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import history from '../history';
import GagPage from "../components/GagPage";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/GagPage" exact component={HomePage} />
                    <Route path="/GagPage/:id"
                     render={({ match }) => <GagPage match={match} />}
                      />
                    {/* <Route path="/GagPage/:id" component={GagPage} /> */}
                </Switch>
            </Router>
        )
    }
}