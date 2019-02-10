import React from 'react';
import { Header } from '../Sections';
import { About } from '../Sections';
import { Projects } from '../Sections';
import { Contact } from '../Sections';

const Home = props => {
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;