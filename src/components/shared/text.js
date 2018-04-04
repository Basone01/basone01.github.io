import styled, { css } from 'styled-components';

const BaseTextStyle = css`
    text-align: ${props => (props.center && 'center') || props.textAlign || 'left'};
    text-indent: ${props => (props.indent ? '3em' : props.littleIndent ? '1.5em' : '0')};
    margin-top: ${props => (props.top ? props.top : '0.25em')};
    margin-bottom: ${props => (props.bottom ? props.bottom : '0.25em')};
`;

const HeadingText = styled.h4`
    ${BaseTextStyle};
    letter-spacing: 1px;
    font-size: ${props => (props.lg ? 1.3 : props.small ? 0.9 : 1)}em;
`;
const ContentText = styled.h5`
    ${BaseTextStyle};
    font-weight: 400;
`;

const Text = styled.p`
    ${BaseTextStyle};
    letter-spacing: 0.03em;
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1.2em;
    padding-top: 0.25em;
`;

const LineBreaker = styled.br`
    display: none;
    @media only screen and (max-width: ${props => props.maxScreen}px) {
        display: block;
    }
`;
export { HeadingText, ContentText, Text, LineBreaker };
