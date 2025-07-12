import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Header.css'
import Quality from '../sections/Quality';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
const Mainlayout = () => {
    return (
        <div className=''>
            <div className='header h-[100vh]'>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className='mt-40'>
                <Quality></Quality>
            </div>
            <div className='mt-40'>
                <About></About>
            </div>
            <div className='mt-40'>
                <Skills></Skills>
            </div>
            <div className='mt-40'>
                <Projects></Projects>
            </div>
            <div className='mt-40'>
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;