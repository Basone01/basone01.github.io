import { NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const ItemCSS = css`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding: 0.5em 1em;
    user-select: none;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
    transition: text-shadow 0.5s, color 0.5s;
`;

const ItemAppear = keyframes`
  from{
    transform:translateX(-50%);
    opacity:0;
  }
  to{
    transform:translateX(0);    
    opacity:1;
  }
`;

const NavItem = styled(NavLink)`
    ${ItemCSS};
    ${props => props.animate && `animation:${ItemAppear} ${props.animate}s`};
    &:before {
        content: '';
        display: block;
        position: absolute;
        background-color: var(--white);
        height: 0.1em;
        bottom: 5%;
        left: 50%;
        right: 50%;
        transition: all 0.25s ease-out;
    }
    &:hover,
    &.active {
        text-shadow: 0 0 0.125em var(--white);
        color: white;
        &:before {
            left: 10%;
            right: 10%;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 0.5rem;
    }
`;

const NavHead = styled.a`
    ${ItemCSS};
    transition: transform 1s;
    ${props => props.isShow && 'transform:rotateY(180deg);'};
    & > * {
        transform: translateY(0.1em);
    }
    
`;

const FlyDown = keyframes`
  from{
    top:-3em;
  }
  
  to{
    top:0;   
  }
`;

const Bar = styled.div`
    display: flex;
    position: ${props => (props.fixed ? 'fixed' : 'absolute')};
    padding: 0.5em 2em;
    justify-content: flex-start;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    ${props => props.fixed && `animation: ${FlyDown} 1s;`};
    @media screen and (max-width:384px){
      justify-content:center;
      padding:0.5em;;
    }
`;

export { FlyDown, Bar, NavHead, NavItem };
