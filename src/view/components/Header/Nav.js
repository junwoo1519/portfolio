import React from "react";
import styled from "styled-components";

const Nav = ({menus}) => {
    return (
        <Container>
            {
                menus.map((item, i) => (
                    <NavItem key={i}>
                        <NavLink>{item.name}</NavLink>
                    </NavItem>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const NavItem = styled.div`

`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 10px;
  height: 70px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #18f;
  }
`;

export default Nav;