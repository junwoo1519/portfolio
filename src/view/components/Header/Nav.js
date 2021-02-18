import React from "react";
import styled from "styled-components";
import {Link} from 'react-scroll';

const Nav = ({menus}) => {
    return (
        <Container>
            {
                menus.map((item, i) => (
                    <NavItem key={i}>
                        <NavLink activeClass="is-active"
                                 to={item.to}
                                 spy={true}
                                 smooth={true}
                                 hashSpy={true}
                                 offset={-70}
                                 duration={500}
                                 ignoreCancelEvents={false}>
                            {item.name}</NavLink>
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

const NavLink = styled(Link)`
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
  transition: .4s;

  .isActive & {
    color: #333;
  }

  &:hover {
    color: #18f;
  }
`;

export default Nav;