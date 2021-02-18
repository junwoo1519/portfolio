import React from "react";
import styled from "styled-components";
import Tags from "../Tags";

const WorksCard = ({
                       title,
                       description,
                       img,
                       tags
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
            <Tags tags={tags}/>
        </Container>
    )
}

const Container = styled.div`
`;

const Thumb = styled.a`
  display: block;
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
  margin-bottom: 15px;
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

export default WorksCard;