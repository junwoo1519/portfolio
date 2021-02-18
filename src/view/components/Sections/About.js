import React from "react";
import styled from "styled-components";
import List from "../List";
import AboutCard from "../Card/AboutCard";
import {ContentContainer} from "../Layout/Layout.Styled";

const aboutData = [
    {
        title: "협업을 좋아합니다.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores doloribus error illum incidunt ipsum iusto labore natus necessitatibus nisi, numquam odio quidem rerum sapiente veniam, vero voluptatum! Ab, ipsa?",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        title: "협업을 좋아합니다.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores doloribus error illum incidunt ipsum iusto labore natus necessitatibus nisi, numquam odio quidem rerum sapiente veniam, vero voluptatum! Ab, ipsa?",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        title: "협업을 좋아합니다.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores doloribus error illum incidunt ipsum iusto labore natus necessitatibus nisi, numquam odio quidem rerum sapiente veniam, vero voluptatum! Ab, ipsa?",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
]

const About = () => {

    return (
        <Container>
            <ContentContainer>
                <List data={aboutData}
                      renderItem={(item) => <AboutCard {...item}/>}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default About;