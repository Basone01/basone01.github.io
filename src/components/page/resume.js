import React, { Component, Fragment } from 'react';
import { AnimatedContainer, Flex, HeadingText, ContentText, Wrapper } from '../shared/';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0 0 0.25em var(--white);
    border: 3px solid var(--white);
`;

const ResumeHead = () => {
    return (
        <Flex ali="stretch" jc="center" style={{ backgroundColor: 'var(--black)' }}>
            <Flex fluid jc="center" ali="center">
                <Image src={require('img/profileResume.jpg')} width={144} />
            </Flex>
            <Flex dir="column" jc="center">
                <HeadingText lg>SURACHET SANGASAENG</HeadingText>
                <HeadingText>Computer Science</HeadingText>
            </Flex>
        </Flex>
    );
};

const HeadingTextWithBackground = HeadingText.extend`
    position: relative;
    z-index: 1;
    margin-top: 1em;
    &::before {
        content: '';
        position: absolute;
        border-radius: 2em;
        background-color: #000;
        left: -2em;
        right: -0.5em;
        top: -0.2em;
        bottom: -0.2em;
        z-index: -1;
    }
`;

const LeftSideTopic = HeadingTextWithBackground.extend`
    margin-top: ${props => props.top || '2'}em;
    margin-bottom: ${props => props.bottom || '1'}em;
    &::before {
        border-radius: 0;
        left: -4em;
        top: -0.5em;
        bottom: -0.5em;
        right: -2em;
    }
`;
const RightSideTopic = LeftSideTopic.extend`
    &::before {
        border-radius: 0;
        left: -2em;
        top: -0.5em;
        bottom: -0.5em;
        right: -4em;
    }
`;

const EduYear = props => {
    return (
        <Flex fluid basis="9em" noShrink >
            <HeadingText>{props.children}</HeadingText>
        </Flex>
    );
};

const EduPlace = props => {
    return (
        <Flex fluid grow={1} ali="stretch" dir="column">
            <HeadingText center>{props.children}</HeadingText>
        </Flex>
    );
};

const Education = props => {
    return (
        <Flex fluid ali="stretch" style={{ marginTop: '1em' }}>
            {props.children}
        </Flex>
    );
};

const InfoSide = () => {
    return (
        <Fragment>
            <LeftSideTopic lg top="0" bottom="0.25">
                INFO
            </LeftSideTopic>
            <HeadingTextWithBackground>ADDRESS</HeadingTextWithBackground>
            <HeadingText small>Nakhonpathom</HeadingText>
            <HeadingText small>THAILAND</HeadingText>
            <HeadingTextWithBackground>DATE OF BIRTH</HeadingTextWithBackground>
            <HeadingText small>19 October 1995</HeadingText>
            <HeadingTextWithBackground>PHONE</HeadingTextWithBackground>
            <HeadingText small>081-765-0133</HeadingText>
            <HeadingTextWithBackground>EMAIL</HeadingTextWithBackground>
            <HeadingText small>basone01@hotmail.com</HeadingText>
        </Fragment>
    );
};

const EducationSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg top="0">
                EDUCATION
            </RightSideTopic>
            <Education>
                <EduYear>2014 - Now</EduYear>
                <EduPlace>
                    Currently studying at Computer Science, King Mongkut's University of Technology
                    North Bangkok
                </EduPlace>
            </Education>
            <Education>
                <EduYear>2008 - 2013</EduYear>
                <EduPlace>Ratanaratbumrung School, Ratchaburi</EduPlace>
            </Education>
        </Fragment>
    );
};

const SkillSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg>
                SKILLS
            </RightSideTopic>
            <HeadingText>Web ( HTML , CSS , JS )</HeadingText>
            <HeadingText>Javascript ( Node.js , Express , React )</HeadingText>
            <HeadingText>Java ( Object-Oriented Concept )</HeadingText>
        </Fragment>
    );
};

const ExperienceSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg>EXPERIENCE</RightSideTopic>
            <HeadingText small>Teacher Assistance : Computer Programming 1 ( Scratch,Python )</HeadingText>
            <HeadingText small>Teacher Assistance : Object-Oriented Programming ( JAVA )</HeadingText>
            <HeadingText small>Teacher Assistance : Basic Android Workshop ( JAVA )</HeadingText>
        </Fragment>
    );
};

const ResumeBody = () => {
    return (
        <Flex hPad jc="space-between" style={{ backgroundColor: '#123', overflow: 'hidden' }}>
            <Flex basis="25%" dir="column" ali="stretch">
                <InfoSide />
            </Flex>
            <Flex basis="65%" dir="column" ali="stretch">
                <EducationSide />
                <SkillSide />
                <ExperienceSide />
            </Flex>
        </Flex>
    );
};

export class Resume extends Component {
    render() {
        return (
            <Flex dir="column" ali="stretch" style={{ margin: '4em', backgroundColor: 'white' }}>
                <ResumeHead />
                <ResumeBody />
            </Flex>
        );
    }
}

export default AnimatedContainer(Resume);
