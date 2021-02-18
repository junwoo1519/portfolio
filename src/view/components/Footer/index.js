import React from "react";
import styled from "styled-components";
import BackTop from "../Button/BackTop";
import {setBoxShadow} from "../../../styled/Util.Styled";

const Footer = () => {
    return (
        <Container>
            <p>Copyright 2021. JunU. All rights reserved.</p>
            <BackTop/>
        </Container>
    )
}

const Container = styled.div`
  padding: 80px 0;
  text-align: center;
  background-color: #eee;
  box-shadow: ${setBoxShadow()};
  p {
    color:#777;
    font-size: 14px;
    letter-spacing: .8px;
  }
`;

export default Footer;