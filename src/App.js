import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact'
require('dotenv').config();


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App;
