import React, {Component} from 'react';
import {AnimatedContainer, Flex, HeadingText, ContentText, Text} from './shared/';
import styled from 'styled-components';

const Image = styled.img`
	border-radius: 50%;
	box-shadow: 0 0 0.25em var(--white);
`;

export class Resume extends Component {
    render() {
        return (
            <Flex justifyContent="flex-start">
                <Flex basis="30%" alignItems="center" direction="column">
                    <Image width="50%" src={require('img/profileResume.jpg')}/>
                    <h3>BASONE01</h3>
                    <HeadingText>Name:</HeadingText>
                    <ContentText indent>Surachet Sangaseang</ContentText>
                    <HeadingText>Age:</HeadingText>
                    <ContentText indent>21 Years</ContentText>
                    <HeadingText>Hometown:</HeadingText>
                    <ContentText indent>Nakhonpathom, THAILAND</ContentText>
                </Flex>
                <Flex basis="70%" direction="column" alignItems="stretch">
                    <h2>SURACHET SANGASAENG</h2>
                    <HeadingText>EDUCATION</HeadingText>
                    <Flex fluid direction="row">
                        <Flex basis="30%" justifyContent="center">
                            <ContentText center>
                                2014 - 2018
                                <br/>
                                (expected date)
                            </ContentText>
                        </Flex>
                        <Flex basis="70%" direction="column">
                            <ContentText center>
                                B.S. in Computer Science ( Current GPX:3.05 )
                                <br/>
                                King Mongkut's University of Technology North Bangkok
                            </ContentText>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}

export default AnimatedContainer(Resume);
