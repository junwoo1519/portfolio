import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Sections/Visual";
import About from "../../components/Sections/About";
import Works from "../../components/Sections/Works";
import Contact from "../../components/Sections/Contact";
import Skills from "../../components/Sections/Skills";

const Home = () => {
    
    return (
        <Container>
            <Visual/>
            <About/>
            <Works/>
            <Skills/>
            <Contact/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;