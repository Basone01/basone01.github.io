import React from 'react';
import { Section } from './home.styled';
import styled, { keyframes } from 'styled-components';
import { Flex, HeadingText, Text } from 'components/shared';

const MeterEffect = keyframes`
  from{
    right:100%;
  }
  to{
    right:${props => props.percent || '0'}%;
  }
`;

const Meter = styled.div`
    height: 0.75em;
    border: 2px solid var(--white);
    margin: 0.5em 1em;
    width: 20em;
    background: var(--white);
    position: relative;
    border-radius: 4px;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: ${props => 100 - props.percent || 0}%;
        top: 0;
        bottom: 0;
        background-color: ${props => props.color || 'var(--black)'};
        z-index: 1;
        animation: ${MeterEffect} 2s;
    }
`;

const WorkStyle = props => (
    <Flex fluid ali="baseline">
        <Flex fluid basis="30%" ali="stretch" dir="column">
            <Text textAlign="right">{props.title}</Text>
        </Flex>
        <Flex fluid basis="70%" ali="stretch" dir="column">
            <Meter percent={props.percent} />
        </Flex>
    </Flex>
);

export default () => {
    return (
        <Section>
            <HeadingText lg bottom="1em" top="1em">
                STYLE
            </HeadingText>
            <Flex fluid ali="stretch" dir="column">
                <WorkStyle title="Coding" percent={85} />
                <WorkStyle title="Code Design" percent={70} />
                <WorkStyle title="Project File Structure" percent={50} />
                <WorkStyle title="UI Design" percent={30} />
                <WorkStyle title="Documentation" percent={20} />
                <WorkStyle title="Team Organizing" percent={15} />
            </Flex>
        </Section>
    );
};
