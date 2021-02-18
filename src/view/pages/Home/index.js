import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Sections/Visual";
import About from "../../components/Sections/About";

const Home = () => {
    
    return (
        <Container>
            <Visual/>
            <About/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;