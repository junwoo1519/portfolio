import React from 'react'
import styled from 'styled-components';
import Nav from "./Nav";

const menus = [
    {
        name: "home",
    },
    {
        name: "about"
    },
    {
        name: "works"
    },
    {
        name: "skills"
    },
    {
        name: "contact"
    }
]

const Header = () => {

    return (
        <Container>
            <Logo/>
            <Nav menus={menus}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 50px;
`;

const Logo = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  cursor:pointer;
`;

export default Header;