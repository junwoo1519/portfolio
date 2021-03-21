import React from "react";
import styled from "styled-components";

const AboutCard = ({
                       title,
                       description,
                       img,
                   }) => {
    return (
        <Container>
            <Thumb>
                <img
                    src={img}
                    alt=""/>
            </Thumb>
            <Desc>
                <h3>
                    {title}
                </h3>
                <p>{description}</p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
`;

const Thumb = styled.div`
  display: block;
  margin-bottom: 20px;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 0 5px #aaaaaa;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    text-transform: capitalize;
    color: #333;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
    color: #777;
    font-weight: 400;
  }
`;

export default AboutCard;