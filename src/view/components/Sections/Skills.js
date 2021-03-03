import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import {appData} from "../../../data";


const Skills = () => {

    return (
        <Container name={"skills"}>
            <ContentContainer>
                <SectionTitle title={appData.skills.title} description={appData.skills.description}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Skills;