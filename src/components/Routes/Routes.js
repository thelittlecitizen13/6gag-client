import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import history from '../../history';
import GagPage from "../GagPage";
import UploadPost from "../UploadGag";

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
                    <Route path="/Post" exact component={UploadPost} />
                </Switch>
            </Router>
        )
    }
}