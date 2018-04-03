import React, { Fragment } from 'react';
import { HeadingText } from 'components/shared/';
import { RightSideTopic } from './resume.styled';
const ExperienceSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg>EXPERIENCE</RightSideTopic>
            <HeadingText>Teacher Assistance :</HeadingText>
            <HeadingText littleIndent small>
                Computer Programming 1 ( Using Scratch, Python )
            </HeadingText>

            <HeadingText littleIndent small>
                Object-Oriented Programming ( Using JAVA )
            </HeadingText>
            <HeadingText littleIndent small>
                Basic Android Workshop ( Using JAVA )
            </HeadingText>
        </Fragment>
    );
};

export default ExperienceSide;
