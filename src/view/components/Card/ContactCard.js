import React from "react";
import styled from "styled-components";

const ContactCard = ({icon}) => {

    return (
        <Container>
            <a href="https://github.com/junwoo1519?tab=repositories">
                {icon}
            </a>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 100px;
    transition: .3s;
    color: #bdbdbd;

    &:hover {
      color: #000;
    }
  }
`;

export default ContactCard;