import React from "react";
import styled from "styled-components";

const Tags = ({tags}) => {

    return (
        <Container>
            {
                tags.map((item, i) => <Tag key={i}>{item}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 26px;
  padding: 0 8px;
  font-size: 11px;
  color: #999;
  background-color: #eee;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  white-space: nowrap;
  border-right: 3px;
`;

export default Tags;