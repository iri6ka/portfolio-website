import React from 'react';
import Home from './pages';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Home />
        </Router>
    )
}

export default App;
