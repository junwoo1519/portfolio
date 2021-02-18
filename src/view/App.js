import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Routes/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;