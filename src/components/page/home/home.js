import React, {Fragment} from 'react';
import {AnimatedContainer, Flex, Text, HeadingText} from 'components/shared/';
import Header from 'components/header/';
import {Section, ProfilePic, Separator,WorkStyle} from './home.styled';


export function Home(props) {
    return (
        <Fragment>
            <Header/>
            <Section style={{
                transform: "translateY(-110px)",
                marginBottom:"-90px"
            }}>
                <Flex justifyContent="center" alignItems="center" style={{maxWidth: "1024px"}} >
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
                                Hi, My name's Bas.
                                I'm a Computer-Science student from KMUTNB. Programming has come to my life while I was
                                studying Matthayom 5,
                                It start from C language and I liked it since then,
                                because it is only one subject that I can prove all answer by myself.
                                That's why decided to be a Computer-Science student.
                            </Text>
                            <Text indent justify>
                                Since I was studied in the university,
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
                    <HeadingText center>" If you see other's mistake more than your mistake, </HeadingText>
                    <HeadingText center>You will see other's bugs more than your bugs "</HeadingText>
                </Flex>
                <Separator/>
            </Section>
            <Section>
                <HeadingText bottom="1em">
                    Working Style
                </HeadingText>
                <Flex fluid alignItems="stretch" direction="column">
                    <WorkStyle title="Coding" percent={85}/>
                    <WorkStyle title="Code Design" percent={70}/>
                    <WorkStyle title="Project File Structure" percent={50}/>
                    <WorkStyle title="UI Design" percent={30}/>
                    <WorkStyle title="Documentation" percent={20}/>
                    <WorkStyle title="Team Organizing" percent={15}/>
                </Flex>
            </Section>

        </Fragment>
    );
}

export default AnimatedContainer(Home);
