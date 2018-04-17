import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    padding: ${props => (props.fluid ? 0 : props.hPad ? '0 2em' : props.vPad ? '2em 0' : '2em')};
    flex-direction: ${props => props.fd || 'row'};
    justify-content: ${props => props.jc || 'flex-start'};
    align-items: ${props => props.ali || 'flex-start'};
    align-content: ${props => props.alc || 'flex-start'};
    flex-grow: ${props => props.grow || '0'};
    flex-shrink: ${props => (props.shrink || props.noShrink ? '0' : '1')};
    flex-basis: ${props => props.basis || 'auto'};
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
    align-self: ${props => props.als || 'auto'};
    & > * {
        ${props => props.childGrow && 'flex-grow:1;'};
        ${props => props.childSpace && `margin:${props.childSpace};`};
    }
    @media screen and (max-width: ${props => props.swapAt}px) {
        ${props => props.swapAt && `flex-direction: ${props.fd === 'column' ? 'row' : 'column'};`};
    }
`;

export const Separator = styled.div`
    display: block;
    border-bottom: 2px solid ${props => (props.inverted ? 'black' : '#FFF1')};
    width: 100%;
    margin: ${props => props.space} 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: 'hidden';
    max-width: 1024px;
    margin: 0 auto;
`;
