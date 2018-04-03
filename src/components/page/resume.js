import React, { Component } from 'react';
import { AnimatedContainer, Flex, HeadingText, ContentText, Wrapper } from '../shared/';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0 0 0.25em var(--white);
`;

const Head = () => {
    return (
        <Flex ali="stretch" style={{ backgroundColor: 'white' }}>
            <Flex style={{ backgroundColor: 'var(--white)' }}>
                <Image src={require('img/profileResume.jpg')} width={144} />
            </Flex>
            <Flex dir="column" grow={1} style={{ backgroundColor: 'var(--black)' }}>
                <HeadingText lg>SURACHET SANGASAENG</HeadingText>
                <HeadingText>Computer Science</HeadingText>
            </Flex>
        </Flex>
    );
};



export class Resume extends Component {
    render() {
        return (
            <Flex dir="column" ali="stretch">
                <Head />

            </Flex>
        );
    }
}

export default AnimatedContainer(Resume);
