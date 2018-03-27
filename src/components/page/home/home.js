import React, { Fragment} from 'react';
import {AnimatedContainer, Flex, Text, HeadingText} from 'components/shared/';
import Header from 'components/header/';
import {StyledAboutSection, ProfilePic, Separator} from './home.styled';

export function Home(props) {
    return (
        <Fragment>
            <Header/>
            <StyledAboutSection>
                <Flex justifyContent="center" alignItems="stretch" style={{maxWidth: "1024px"}}>
                    <Flex fluid grow={1} direction="column" alignItems="stretch">
                        <Flex fluid alignItems="baseline" justifyContent="center" style={{marginBottom: '1em'}}>
                            <h3 style={{textAlign: "right"}}>Surachet Sangasaeng</h3>
                            <span style={{
                                width: 1,
                                height: "2em",
                                marginLeft: "1em",
                                marginRight: "1em",
                                alignSelf: "center",
                                borderRight: '0.1em solid var(--white)'
                            }}/>
                            <p style={{textAlign: "left"}}>Computer Science</p>
                        </Flex>
                        <Flex fluid direction="column">
                            <HeadingText>About Me:</HeadingText>
                            <Text indent justify>
                                Hi, I'm a Computer-Science student from KMUTNB. I start my programming life from C
                                language
                                while I was studying Matthayom 5 and I liked it since then,
                                because it is only one subject that I can prove all answer by myself.
                                That's why decided to be a Computer-Science student.
                            </Text>
                            <Text indent justify>
                                When I was studying in the university,
                                I met many programming language, many problem and got some skills form them,
                                And now I'm looking for an opportunity to use them to make something great.
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex fluid direction="column" alignItems="center" style={{marginLeft: "3em"}}>
                        <ProfilePic src={require('img/profilePic.jpg')}/>
                        <HeadingText center>THIS IS ME !!!</HeadingText>
                    </Flex>

                </Flex>
                <Separator/>
                <Flex direction="column" alignItems="stretch">
                    <HeadingText center>" You can see other's mistake more than your mistake, </HeadingText>
                    <HeadingText center>and you can see other's bugs more than your bugs "</HeadingText>
                </Flex>
                <Separator/>
            </StyledAboutSection>
        </Fragment>
    );
}

export default AnimatedContainer(Home);
