import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
// import About from './components/AboutSection';
// import Skills from './components/Skills'
import ContactPage from './pages/contact-page';

// import Resume from './files/IrinaKonnovaResume.pdf'
require('dotenv').config();

const App = () => {
    return (
        <Router>
            <Switch>
                <Route  path="/contact" component={ ContactPage } exact/>
                <Route  path="/" component={ Home } exact/>
                <Route path='/resume' component={() => { 
                window.location.href = 'https://irinakonnova-resume.s3.ap-southeast-2.amazonaws.com/Irina+Konnova+Resume+-+July+2021.pdf'; 
                return null;
                }}/>                
            </Switch>
        </Router>
    )
}

export default App;
