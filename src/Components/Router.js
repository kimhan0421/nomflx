import React, { HashRouter } from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/tv/pop" render={() => <h1>Pop</h1>} />
                <Route path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
