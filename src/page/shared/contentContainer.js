import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	padding: ${(props) => (props.fluid ? 0 : '2em')};
	flex-direction: ${(props) => props.direction || 'row'};
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
	flex-grow: ${(props) => props.grow || '0'};
	flex-basis: ${(props) => props.basis || 'auto'};
	flex-wrap: ${(props) => props.wrap || 'nowrap'};
`;
