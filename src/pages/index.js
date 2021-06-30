import React, {useState} from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import HeroSection from '../components/HeroSection';
import About from '../components/AboutSection';
import {objOne} from '../components/AboutSection/Data';
import Skills from '../components/Skills';
import ContactPage from './contact-page';
import Footer from '../components/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false) 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <About {...objOne}/>
            <Skills />
            <ContactPage />
            <Footer />
        </>
    )
}

export default Home;
