import React, {useState} from "react";
import styled from "styled-components";
import {Overlay} from "../Layout/Layout.Styled";
import {shine} from "../../../styled/Motion.Stuled";
import {scroller} from "react-scroll";


const Visual = () => {

    const [scrolled, setScrolled] = useState(true);
    const onWheel = (e) => {
        if (e.deltaY > 0) {
            if (scrolled) {
                scroller.scrollTo('about', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                    ignoreCancelEvents: true
                })
                setScrolled(false);
                setTimeout(() => {
                    setScrolled(true)
                }, 1000)
            }
        }
    }

    return (
        <Container name={"visual"}
                   onScroll={onWheel}>
            <StyledOverlay/>
            <Contents>
                <h1>Go</h1>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80") 50% / cover;
`;

const Contents = styled.div`
  position: relative;

  h1 {
    white-space: nowrap;
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const StyledOverlay = styled(Overlay)`
  animation: ${shine} 5s ease-in forwards;
`;

export default Visual;