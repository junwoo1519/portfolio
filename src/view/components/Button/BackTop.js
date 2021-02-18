import React from "react";
import styled from "styled-components";
import {BiArrowToTop} from "react-icons/all";
import {scrollToTop} from "../../../lib/Common";
import {useActiveByScroll} from "../../../hooks/useActiveByScroll";
import cn from "classnames";

const BackTop = () => {

    const isActive = useActiveByScroll(1500);

    return (
        <Container
            className={cn({isActive})}
            onClick={() => scrollToTop({
                duration: 500
            })}>
            <BiArrowToTop/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  background-color: #18f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 50%;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, .15);
  cursor: pointer;
  transition: .4s;
  transform: translateY(300%);

  &.isActive {
    transform: none;
  }
`;

export default BackTop;