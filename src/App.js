import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills'
import ContactPage from './pages/contact';

// import Resume from './files/IrinaKonnovaResume.pdf'
require('dotenv').config();

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/about" component={AboutSection}/>
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={ContactPage} />
                {/* <Route exact path="/resume" component={Resume} /> */}

            </Switch>
        </Router>
    )
}

export default App;
