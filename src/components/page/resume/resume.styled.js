import styled from 'styled-components';
import { HeadingText } from 'components/shared/';

export const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0 0 0.25em var(--white);
    border: 3px solid var(--white);
`;

export const HeadingTextWithBackground = HeadingText.extend`
    position: relative;
    z-index: 1;
    margin-top: 1em;
    &::before {
        content: '';
        position: absolute;
        border-radius: 2em;
        background-color: black;
        left: -2em;
        right: -0.5em;
        top: -0.2em;
        bottom: -0.2em;
        z-index: -1;
    }
`;

export const LeftSideTopic = HeadingTextWithBackground.extend`
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
export const RightSideTopic = LeftSideTopic.extend`
    &::before {
        border-radius: 0;
        left: -2em;
        top: -0.5em;
        bottom: -0.5em;
        right: -4em;
    }
`;
