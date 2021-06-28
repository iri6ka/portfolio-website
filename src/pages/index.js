import React, {useState} from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import {objOne} from '../components/AboutSection/Data';
import Skills from '../components/Skills';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false) 
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <React.Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection {...objOne}/>
            <Skills />
        </React.Fragment>
    )
}

export default Home;
