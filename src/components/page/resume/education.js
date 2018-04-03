import React, { Fragment } from 'react';
import { Flex, HeadingText, LineBreaker } from 'components/shared/';
import { RightSideTopic } from './resume.styled';

const EduYear = props => {
    return (
        <Flex fluid basis="9em" noShrink>
            <HeadingText>{props.children}</HeadingText>
        </Flex>
    );
};

const EduPlace = props => {
    return (
        <Flex fluid grow={1} ali="stretch" dir="column">
            <HeadingText center small>
                {props.children}
            </HeadingText>
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

const EducationSide = () => {
    return (
        <Fragment>
            <RightSideTopic lg top="0">
                EDUCATION
            </RightSideTopic>
            <Education>
                <EduYear>2014 - Now</EduYear>
                <EduPlace>
                    Currently studying at<LineBreaker maxScreen={1144} /> Computer Science,
                    <LineBreaker maxScreen={1144} /> King Mongkut's University of Technology North
                    Bangkok
                </EduPlace>
            </Education>
            <Education>
                <EduYear>2008 - 2013</EduYear>
                <EduPlace>Ratanaratbumrung School, Ratchaburi</EduPlace>
            </Education>
        </Fragment>
    );
};

export default EducationSide;
