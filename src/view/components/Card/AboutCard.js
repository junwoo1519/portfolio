import React from "react";
import styled from "styled-components";

const AboutCard = () => {
    return (
        <Container>
            <Thumb>
                <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""/>
            </Thumb>
            <Desc>
                <h3>
                    협업을 좋아라 합니다.
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nesciunt odio optio perferendis quam
                    sapiente soluta sunt. Assumenda atque delectus dolorem eaque illo in, modi nihil nulla officiis
                    tempore
                    voluptatibus!</p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
`;

const Thumb = styled.div`
  margin-bottom: 20px;
  border-radius: 9px;
  overflow: hidden;

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
    margin-bottom: 5px;
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