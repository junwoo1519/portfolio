import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import {appData} from "../../../data";
import List from "../List";
import SkillCard from "../Card/SkillCard";


const Skills = () => {

    return (
        <Container name={"skills"}>
            <ContentContainer>
                <SectionTitle title={appData.skills.title} description={appData.skills.description}/>
                <List data={appData.skills.items}
                      renderItem={(item) => <SkillCard {...item}/>}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Skills;