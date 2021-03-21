import React from "react";
import styled from "styled-components";

const SkillCard = ({
                       title,
                       icon,
                   }) => {
    return (
        <Container>
            <Icon>
                {icon}
            </Icon>
            <Desc>
                <h3>
                    {title}
                </h3>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 120px;
`;

const Desc = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    color: #333;
  }
`;

export default SkillCard;