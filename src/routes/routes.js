import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ProblemDetails from "../page/programming/ProblemDetails";
import ProblemList from "../page/programming/ProblemList";
import App from "../App";
import history from './history';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/ProblemDetails" component={ProblemDetails} />
                    <Route path="/ProblemList" component={ProblemList} />

                </Switch>
            </Router>
        )
    }
}
