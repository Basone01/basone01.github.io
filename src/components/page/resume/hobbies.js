import React, { Fragment } from 'react';
import { LeftSideTopic } from './resume.styled';
import { HeadingText } from 'components/shared';
const HobbiesSide = () => {
    return (
        <Fragment>
            <LeftSideTopic lg>HOBBIES</LeftSideTopic>
            <HeadingText>Listen to the Music</HeadingText>
            <HeadingText>Play the Guitar</HeadingText>
            <HeadingText>Take a Photo</HeadingText>
            <HeadingText>Play Online Games</HeadingText>
        </Fragment>
    );
};

export default HobbiesSide;
