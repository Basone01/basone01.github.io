import React, { Component } from 'react';
import { AnimatedContainer, Flex, HeadingText } from 'components/shared/';
import { Image } from './resume.styled';
import InfoSide from './info';
import HobbiesSide from './hobbies';
import EducationSide from './education';
import ExperienceSide from './experience';
import SkillSide from './skill';

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

export class Resume extends Component {
    render() {
        return (
            <Flex
                dir="column"
                ali="stretch"
                style={{
                    margin: '4em auto',
                    backgroundColor: 'white',
                    maxWidth: '1154px',
                    padding: '0.5em'
                }}
            >
                <ResumeHead />
                <Flex
                    hPad
                    jc="space-between"
                    style={{ backgroundColor: '#123', overflow: 'hidden', paddingBottom: '4em' }}
                >
                    <Flex basis="25%" dir="column" ali="stretch">
                        <InfoSide />
                        <HobbiesSide />
                    </Flex>
                    <Flex basis="65%" dir="column" ali="stretch">
                        <EducationSide />
                        <SkillSide />
                        <ExperienceSide />
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}

export default AnimatedContainer(Resume);
