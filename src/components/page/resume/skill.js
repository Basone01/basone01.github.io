import React, { Fragment } from 'react';
import { HeadingText } from 'components/shared/';
import { RightSideTopic } from './resume.styled';

const SkillSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg>SKILLS</RightSideTopic>
            <HeadingText>Web ( HTML , CSS , JS )</HeadingText>
            <HeadingText>Javascript ( Node.js , Express , React )</HeadingText>
            <HeadingText>Java ( Object-Oriented Concept )</HeadingText>
        </Fragment>
    );
};

export default SkillSide;
