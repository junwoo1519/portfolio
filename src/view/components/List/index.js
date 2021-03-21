import React from "react";
import styled from "styled-components";

const List = ({data, renderItem}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item, i) =>
                        <Col key={i}>
                            {renderItem(item)}
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 12px;
  transition: .3s;
  color: #bdbdbd;

  :nth-child(1) {
    &:hover {
      color: #dd4b25;
    }
  }

  :nth-child(2) {
    &:hover {
      color: #214ce5;
    }
  }

  :nth-child(3) {
    &:hover {
      color: #f7e018;
    }
  }

  :nth-child(4) {
    &:hover {
      color: #60dafb;
    }
  }

  :nth-child(5) {
    &:hover {
      color: #7146b6;
    }
  }

  :nth-child(6) {
    &:hover {
      color: #c76494;
    }
  }

  :nth-child(7) {
    &:hover {
      color: #e84e31;
    }
  }
`;

export default List;