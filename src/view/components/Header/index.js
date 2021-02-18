import React from 'react'
import styled from 'styled-components';
import Nav from "./Nav";
import cn from "classnames";
import {useActiveByScroll} from "../../../hooks/useActiveByScroll";
import {setBoxShadow} from "../../../styled/Util.Styled";

const menus = [
    {
        name: "home",
        to: "visual"
    },
    {
        name: "about",
        to: "about"
    },
    {
        name: "works",
        to: "works"
    },
    {
        name: "skills",
        to: "skills"
    },
    {
        name: "contact"
    }
]

const Header = () => {

    const isActive = useActiveByScroll(window.innerHeight * 0.6);

    return (
        <Container className={cn({isActive})}>
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
  transition: .4s;

  &.isActive {
    background-color: #fff;
    box-shadow: ${setBoxShadow()};
  }
`;

const Logo = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: .4s;

  .isActive & {
    color: #333;
  }

`;

export default Header;