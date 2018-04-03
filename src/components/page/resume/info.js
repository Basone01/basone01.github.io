import React, { Fragment } from 'react';
import { LeftSideTopic, HeadingTextWithBackground } from './resume.styled';
import { HeadingText } from 'components/shared';
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

export default InfoSide;
