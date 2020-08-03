import * as React from 'react';
import pageStyle from '../Page.module.css';
import Hero from '../../hero';
import Skills from '../../skills';
import Navbar from '../../navbar';
import Projects from '../../projects';
import About from '../../about';
import Contact from '../../contact';
import Footer from '../../footer';

const HomePage: React.FC = () =>{
    return(
        <div className={pageStyle.container}>
            <Navbar/>
            <div className={pageStyle.content}>
                <Hero/>
                <About/>       
                <Projects/>
                <Skills/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;