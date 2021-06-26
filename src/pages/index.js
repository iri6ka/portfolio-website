import React, {useState} from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import HeroSection from '../components/HeroSection';


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
        </React.Fragment>
    )
}

export default Home;
