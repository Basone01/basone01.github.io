import React, { Fragment } from 'react';
import { Flex, HeadingText, LineBreaker } from 'components/shared/';
import { RightSideTopic } from './resume.styled';

const ExperienceSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg>EXPERIENCE</RightSideTopic>
            <HeadingText>Teacher Assistance :</HeadingText>
            <Flex fluid jc="flex-start" ali="flex-start">
                <HeadingText littleIndent small>Computer Programming 1 <LineBreaker maxScreen={1056}/> ( Using Scratch, Python )</HeadingText>
            </Flex>
            <Flex fluid jc="flex-start" ali="flex-start">
                <HeadingText littleIndent small>Object-Oriented Programming <LineBreaker maxScreen={1056}/>  ( Using JAVA )</HeadingText>
            </Flex>
            <Flex fluid jc="flex-start" ali="flex-start">
                <HeadingText littleIndent small>Basic Android Workshop <LineBreaker maxScreen={1056}/>  ( Using JAVA )</HeadingText>
            </Flex>
        </Fragment>
    );
};

export default ExperienceSide;
