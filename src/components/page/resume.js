import React, {Component} from 'react';
import styled from 'styled-components';
import {AnimatedContainer, Flex, HeadingText, Separator} from 'components/shared/';

const ResumeBox = styled.div `
    margin:72px;
    @media screen and (max-width:1024px){
        margin:36px;
    }
    @media screen and (max-width:600px){
        margin:12px 0;
    }
`;

const Image = styled.img `
    border-radius: 50%;
    box-shadow: 0 0 0.25em var(--white);
    border: 3px solid var(--white);
    margin-bottom:15px;
    @media screen and (max-width: 384px) {
        width:100px;
    }
`;

const Topic = styled.h2 `
    margin:0;
`;

const SubTopic = styled.h3 `
    margin:0;
    margin-bottom:6px;
`;

const Text = styled.p `
    text-align:justify;
    margin:3px 0;
    text-indent:${props => props.indent
    ? "2em"
    : 0};
    padding-left:${props => props.tab
        ? "2em"
        : 0};
    font-weight:${props => props.bold
            ? "bold"
            : 400};
`;

const ALink = styled.a `
    color:inherit;
    text-decoration:none;
    font-weight:bold;
    margin-bottom:0.25em;
    transition:color 0.5s;
    &:hover{
        color:white;
    }
`

const ResumeHead = () => {
    return (
        <Flex hPad ali="stretch" jc="space-between" swapAt={1024}>
            <Flex fluid jc="flex-start" swapAt={800}>
                <Flex fluid als="center">
                    <Image src={require('img/profileResume.jpg')} width={144}/>
                </Flex>
                <Flex hPad fd="column" ali="flex-start">
                    <Topic>SURACHET SANGASAENG</Topic>
                    <Text bold>Computer Science - KMUTNB</Text>
                    <Separator space="8px"/>
                    <Text>
                        Who am I ? A developer...?
                        <br/>I don't know the answer for now, but then is yes.

                    </Text>

                </Flex>
            </Flex>
            <Flex fluid fd="column" ali="flex-end">
                <ALink target="_blank" href="https://github.com/basone01">github.com/basone01</ALink>
                <ALink href="mailto: basone01@hotmail.com">basone01@hotmail.com</ALink>

                <Text>081-765-0133</Text>
            </Flex>
        </Flex>
    );
};

export class Resume extends Component {
    render() {
        return (
            <ResumeBox>

                <Flex fd="column" ali="stretch">
                    <ResumeHead/>
                    <Separator space="24px"/>
                    <Flex hPad fd="column" ali="stretch">

                        <SubTopic>Summary</SubTopic>
                        <Text tab>A computer-science student from King Mongkut's University of
                            Technology North Bangkok, who loves to gets new techiques from everywhere and
                            shares them to his friends, he likes to hear his friends say "Shredddd~", likes
                            to watch the result of his code and says "Boooommm!!~", likes to help his friend
                            to debug the code. Those are happiness of his programming. And now he interested
                            in javascript world that have a lot of weapons to use and a lot of friends to
                            share.</Text>
                    </Flex>
                    <Separator space="12px"/>

                    <Flex hPad fd="column" ali="stretch">

                        <SubTopic>Education</SubTopic>
                        <Text bold>2014 - Present ( Current GPX: 3.05 )</Text>
                        <Text tab>
                            Currently studying Computer-Science, Bachelor of Applied Science,
                            <br/>
                            King Mongkut's University of Thechnology North Bangkok
                        </Text>

                        <Text bold>2008 - 2013</Text>
                        <Text tab>
                            High School, Ratanaratbumrung School, Ratchaburi</Text>
                    </Flex>
                    <Separator space="12px"/>
                    <Flex hPad fd="column" ali="stretch">

                        <SubTopic>Technical Skills</SubTopic>
                        <ul
                            style={{
                            marginTop: 0
                        }}>
                            <li>Strong : ES6, React</li>
                            <li>Knowledgeable : Redux, Recompose, Styled-Components, Bootstrap</li>
                            <li>Basic : Restful API, Express, MongoDB, JAVA</li>

                        </ul>
                    </Flex>
                </Flex>

            </ResumeBox>
        );
    }
}

export default AnimatedContainer(Resume);
