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
                <Route  path="/" component={ Home } exact/>                
                {/* <Route path="/about" component={ About } />
                <Route path="/skills" component={ Skills } /> */}

                <Route  path="/contact-page"exact>
                    <ContactPage />
                </Route>

            </Switch>
        </Router>
    )
}

export default App;
