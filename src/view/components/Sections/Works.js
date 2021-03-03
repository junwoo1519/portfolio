import React from "react";
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import List from "../List";
import WorksCard from "../Card/WorkCard";
import SectionTitle from "../Title/SectionTitle";
import {appData} from "../../../data";

const Works = () => {

    const renderItem = (item) => <WorksCard {...item}/>

    return (
        <Container name={"works"}>
            <ContentContainer>
                <SectionTitle title={appData.works.title} description={appData.works.description}/>
                <List data={appData.works.items}
                      renderItem={renderItem}
                />
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`
  background-color:#f7f8f9;
`;

export default Works;