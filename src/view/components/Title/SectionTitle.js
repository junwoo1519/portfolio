import React from "react";
import styled from "styled-components";

const SectionTitle = ({title, description}) => {
    return (
        <Container>
            <h2>{title}</h2>
            {
                description &&
                <p>{description}</p>
            }

        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h2 {
    text-transform: capitalize;
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 20px;
    color: #777;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export default SectionTitle;