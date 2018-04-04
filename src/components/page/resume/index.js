import React, { Component } from 'react';
import styled from 'styled-components';
import { AnimatedContainer, Flex, HeadingText } from 'components/shared/';
import { Image } from './resume.styled';
import InfoSide from './info';
import HobbiesSide from './hobbies';
import EducationSide from './education';
import ExperienceSide from './experience';
import SkillSide from './skill';
import { LineBreaker } from '../../shared/text';

const ResumeHead = () => {
    return (
        <Flex ali="stretch" jc="center" style={{ backgroundColor: '#012' }}>
            <Flex fluid jc="center" ali="center">
                <Image src={require('img/profileResume.jpg')} width={144} />
            </Flex>
            <Flex dir="column" jc="center">
                <HeadingText lg>SURACHET SANGASAENG</HeadingText>
                <HeadingText>Computer Science - KMUTNB</HeadingText>
            </Flex>
        </Flex>
    );
};

const ResumeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 4em auto;
    background-color: white;
    max-width: 1154px;
    padding: 0.5em;
    @media screen and (max-width: 960px) {
        & ${LineBreaker} {
            display: none;
        }
    }
    
    @media screen and (max-width: 384px) {
        font-size: 10px;
        margin: 6em auto;
    }
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    flex-basis:25%;
    padding:2em;
    @media screen and (max-width:960px){
        
        
    }
`;

export class Resume extends Component {
    render() {
        return (
            <ResumeWrapper>
                <ResumeHead />
                <Flex
                    hPad
                    jc="space-between"
                    swapAt={960}
                    style={{ backgroundColor: '#123', overflow: 'hidden', paddingBottom: '4em' }}
                >
                    <LeftSide>
                        <InfoSide />
                        <HobbiesSide />
                    </LeftSide>
                    <Flex basis="60%" dir="column" ali="stretch">
                        <EducationSide />
                        <SkillSide />
                        <ExperienceSide />
                    </Flex>
                </Flex>
            </ResumeWrapper>
        );
    }
}

export default AnimatedContainer(Resume);
