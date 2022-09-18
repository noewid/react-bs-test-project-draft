import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Button, Alert} from 'react-bootstrap'
import Sidebar from "./sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from "./Home";
import { Information } from "./Information";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

function App() {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/information" component={Information} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
}

export default App;
