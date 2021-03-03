import React from "react";
import styled from "styled-components";

const List = ({data, renderItem}) => {
    return (
        <Container>
            <Row>
                {
                    data.map((item, i) =>
                        <Col>
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
`;

export default List;