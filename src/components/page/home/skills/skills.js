import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, HeadingText, Separator } from 'components/shared';

const rotate = keyframes`
    from{
      transform: rotateY(90deg);
    }
    to{
      transform: rotateY(0deg);
    }
`;

const SkillBox = styled.div`
    display: Flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 7em;
    height: 9em;
    padding: 1em 0.5em;
    margin: 1em 0.5em;
    border-radius: 10px;
    background-color: var(--white);
    text-align: center;
    color: var(--black);
    //flex-basis: 20%;
    animation: ${rotate} 2s;
`;

const SkillIcon = styled.img`
    width: 80px;
    height: 80px;
    border: 2px solid white;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1em;
    background-color: white;
`;

function Skill(props) {
    return (
        <SkillBox>
            <SkillIcon src={props.src} />
            <Separator inverted />
            <HeadingText top="0em">{props.title}</HeadingText>
        </SkillBox>
    );
}

export default class SkillList extends Component {
    static Skill = Skill;
    render() {
        return (
            <Flex fluid jc="center" wrap>
                {this.props.children}
            </Flex>
        );
    }
}
