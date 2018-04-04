import React from 'react';
import { LeftSideTopic, HeadingTextWithBackground } from './resume.styled';
import { HeadingText, Flex } from 'components/shared';
import styled from 'styled-components';

const InfoContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 960px) {
        flex-direction: row;
        flex-wrap: wrap;
        & > * {
            flex-basis: 50%;
        }
    }
`;

const InfoSide = () => {
    return (
        <div>
            <LeftSideTopic lg top="0" bottom="0.25">
                INFO
            </LeftSideTopic>
            <InfoContentBox>
                <Flex fluid dir="column">
                    <HeadingTextWithBackground>ADDRESS</HeadingTextWithBackground>
                    <HeadingText small>Nakhonpathom</HeadingText>
                    <HeadingText small>THAILAND</HeadingText>
                </Flex>
                <Flex fluid dir="column">
                    <HeadingTextWithBackground>DATE OF BIRTH</HeadingTextWithBackground>
                    <HeadingText small>19 October 1995</HeadingText>
                </Flex>
                <Flex fluid dir="column">
                    <HeadingTextWithBackground>PHONE</HeadingTextWithBackground>
                    <HeadingText small>081-765-0133</HeadingText>
                </Flex>
                <Flex fluid dir="column">
                    <HeadingTextWithBackground>EMAIL</HeadingTextWithBackground>
                    <HeadingText small>basone01@hotmail.com</HeadingText>
                </Flex>
            </InfoContentBox>
        </div>
    );
};

export default InfoSide;
