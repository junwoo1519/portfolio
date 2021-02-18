import React from "react";
import styled from "styled-components";
import List from "../List";
import AboutCard from "../Card/AboutCard";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import {appData} from "../../../data";


const Contact = () => {

    return (
        <Container name={"Contact"}>
            <ContentContainer>
                <SectionTitle title={appData.contact.title} description={appData.contact.description}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`
  background-color:#f7f8f9;
`;

export default Contact;