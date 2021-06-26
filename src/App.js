import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Sidebar /> 
            <Navbar />
        </Router>
    )
}

export default App;
