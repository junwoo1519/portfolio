import React from "react";
import styled from "styled-components";
import List from "../List";
import AboutCard from "../Card/AboutCard";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import {appData} from "../../../data";


const About = () => {

    return (
        <Container name={"about"}>
            <ContentContainer>
                <SectionTitle title={appData.about.title} description={appData.about.description}/>
                <List data={appData.about.items}
                      renderItem={(item) => <AboutCard {...item}/>}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default About;