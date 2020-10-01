import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import history from '../../history';
import GagPage from "../Pages/GagPage";
import UploadPost from "../Pages/UploadGag";
import MostRated from "../Pages/MostRated";
import PostModal from '../Pages/PostModal';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/GagPage" exact component={HomePage} />
                    <Route path="/MostRated" exact component={MostRated} />
                    <Route path="/GagPage/:id"
                     render={({ match }) => <GagPage match={match} />}
                      />
                    {/* <Route path="/GagPage/:id" component={GagPage} /> */}
                    <Route path="/Post" exact component={PostModal} />
                </Switch>
            </Router>
        )
    }
}