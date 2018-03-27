import styled, {keyframes} from "styled-components";


const FlyDown = keyframes`
  from{
    top:-3em;
  }
  
  to{
    top:0;   
  }
`

const Bar = styled.div`
    display: flex;
    position:${props => props.fixed ? 'fixed' : 'absolute'};
    padding: 0.25em 1em;
    justify-content:center;
    top:0;
    left:0;
    right:0;
    z-index:10;
    ${props => props.fixed && `animation: ${FlyDown} 1s;`}; 
`;

export {FlyDown,Bar}