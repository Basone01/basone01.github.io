import styled, { css } from 'styled-components';

const BaseTextStyle = css`
	text-align: ${(props) => (props.center && 'center') || (props.justify && 'justify') || 'left'};
	text-indent: ${(props) => (props.indent ? '3em' : '0')};
	margin-top: ${(props) => (props.top ? props.top : '0')};
	margin-bottom: ${(props) => (props.bottom ? props.bottom : '0')};
`;

const HeadingText = styled.h4`
	${BaseTextStyle};
`;
const ContentText = styled.h5`
	${BaseTextStyle};
	font-weight: 400;
`;

const Text = styled.p`
	${BaseTextStyle};
	letter-spacing: 0.03em;
	font-size: 0.8rem;
	font-weight: 400;
	line-height: 1.2em;
	padding-top: 0.25em;
`;

export { HeadingText, ContentText, Text };
