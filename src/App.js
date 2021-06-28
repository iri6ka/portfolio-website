import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import About from './components/AboutSection'
import Skills from './components/Skills'
// import Resume from './components/Resume'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/" component={ About }  />
                <Route exact path="/" component={ Skills } />
            </Switch>
        </Router>
    )
}

export default App;
