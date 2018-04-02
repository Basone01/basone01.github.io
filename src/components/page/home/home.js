import React, { Fragment } from 'react';
import {
    AnimatedContainer,
    Flex,
    Text,
    HeadingText,
    Separator,
    Wrapper,
    ContentText
} from 'components/shared/';
import Header from './header/';
import SkillsList from 'components/skills/';
import { Section, ProfilePic, WorkStyle } from './home.styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
export function Home(props) {
    return (
        <Fragment>
            <Header />
            <Wrapper>
                {/* ABOUT ME SECTION */}
                <Section
                    style={{
                        transform: 'translateY(-72px)',
                        marginBottom: '-90px'
                    }}
                >
                    <Flex fluid justifyContent="center" alignItems="center">
                        <Flex fluid grow={1} direction="column" alignItems="stretch">
                            <Flex fluid alignItems="baseline" justifyContent="center">
                                <h3 style={{ textAlign: 'right' }}>Surachet Sangasaeng</h3>
                                <span
                                    style={{
                                        width: 1,
                                        height: '2em',
                                        marginLeft: '1em',
                                        marginRight: '1em',
                                        alignSelf: 'center',
                                        borderRight: '0.1em solid var(--white)'
                                    }}
                                />
                                <p style={{ textAlign: 'left' }}>Computer Science</p>
                            </Flex>
                            <Flex direction="column">
                                <HeadingText bottom="0.25em">ABOUT ME:</HeadingText>
                                <Text indent justify>
                                    Hi, My name's Bas. I'm a Computer-Science student from KMUTNB.
                                    Programming has come to my life while I was studying Matthayom
                                    5, It start from C language and I liked it since then, because
                                    it is only one subject that I can prove all answer by myself.
                                    That's why decided to be a Computer-Science student.
                                </Text>
                                <Text indent justify>
                                    Until now, I met many programming language, many problem and got
                                    some skills form them, And now I'm looking for an opportunity to
                                    use them to make something great.
                                </Text>
                            </Flex>
                        </Flex>

                        {/* PROFILE PIC SIDE */}

                        <Flex
                            fluid
                            direction="column"
                            alignItems="center"
                            style={{ marginLeft: '3em', transform: 'translateY(-50px)' }}
                        >
                            <ProfilePic src={require('img/profilePic.jpg')} />
                            <HeadingText center>THIS IS ME !!!</HeadingText>
                        </Flex>
                    </Flex>
                </Section>

                {/* INFO SECTION */}

                <Section>
                    <Flex fluid alignSelf="stretch" justifyContent="center">
                        <Flex direction="column" alignItems="stretch">
                            <HeadingText center bottom="0.25em">
                                Personal
                            </HeadingText>
                            <HeadingText small>Full name :</HeadingText>
                            <Text indent bottom="0.5em">
                                Surachet Sangasaeng
                            </Text>
                            <HeadingText small>Nickname :</HeadingText>
                            <Text indent bottom="0.5em">
                                Bas
                            </Text>
                            <HeadingText small>Date of Birth :</HeadingText>
                            <Text indent bottom="0.5em">
                                19 Oct 1995
                            </Text>
                            <HeadingText small>Hobbies :</HeadingText>
                            <Text indent bottom="0.5em">
                                <a target="_blank" href="http://www.instagram.com/basone01">
                                    <FontAwesomeIcon fixedWidth icon="camera-retro" size="2x" />
                                </a>
                                <FontAwesomeIcon fixedWidth icon="headphones" size="2x" />{' '}
                                <FontAwesomeIcon fixedWidth icon="gamepad" size="2x" />
                            </Text>
                        </Flex>
                        
                        <Flex direction="column" alignItems="stretch">
                            <HeadingText center bottom="0.25em">
                                Contact
                            </HeadingText>
                            <HeadingText small>Email :</HeadingText>
                            <Text indent bottom="0.5em">
                                <a href="mailto:basone01@hotmail.com">
                                    <FontAwesomeIcon fixedWidth icon="envelope" size="lg" />{' '}
                                    basone01@hotmail.com
                                </a>
                            </Text>
                            <HeadingText small>Telephone :</HeadingText>
                            <Text indent bottom="0.5em">
                                <FontAwesomeIcon fixedWidth icon="phone-square" size="lg" />{' '}
                                081-7650133
                            </Text>
                            <HeadingText small>Socials :</HeadingText>
                            <Text indent bottom="0.5em">
                                <a target="_blank" href="http://github.com/basone01">
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={['fab', 'github']}
                                        size="lg"
                                    />{' '}
                                    Github : basone01
                                </a>
                            </Text>
                            <Text indent bottom="0.5em">
                                <a target="_blank" href="http://fb.com/basone01">
                                    <FontAwesomeIcon
                                        fixedWidth
                                        icon={['fab', 'facebook']}
                                        size="lg"
                                    />{' '}
                                    Facebook : basone01
                                </a>
                            </Text>
                            <Text indent bottom="0.5em">
                                <a target="_blank" href="http://line.me/ti/p/~basone01">
                                    <FontAwesomeIcon fixedWidth icon={['fab', 'line']} size="lg" />{' '}
                                    Line : basone01
                                </a>
                            </Text>
                        </Flex>
                    </Flex>
                </Section>

                {/* QUOTE */}

                <Separator />

                <Flex direction="column" alignItems="stretch">
                    <HeadingText center>
                        " If you see other's mistake more than your mistake,
                    </HeadingText>
                    <HeadingText center>
                        You will see other's bugs more than your bugs "
                    </HeadingText>
                </Flex>

                <Separator />

                {/* STYLE SECTION */}

                <Section>
                    <HeadingText large bottom="1em" top="1em">
                        STYLE
                    </HeadingText>
                    <Flex fluid alignItems="stretch" direction="column">
                        <WorkStyle title="Coding" percent={85} />
                        <WorkStyle title="Code Design" percent={70} />
                        <WorkStyle title="Project File Structure" percent={50} />
                        <WorkStyle title="UI Design" percent={30} />
                        <WorkStyle title="Documentation" percent={20} />
                        <WorkStyle title="Team Organizing" percent={15} />
                    </Flex>
                </Section>
                <Separator space="1em" />

                {/* SKILLS SECTION */}

                <Section>
                    <HeadingText large bottom="1em">
                        SKILLs
                    </HeadingText>
                    <SkillsList>
                        <SkillsList.Skill src={require('img/reactIcon.png')} title={'React'} />
                        <SkillsList.Skill src={require('img/nodejsIcon.png')} title={'NodeJS'} />
                        <SkillsList.Skill src={require('img/htmlIcon.png')} title={'HTML'} />
                        <SkillsList.Skill src={require('img/cssIcon.png')} title={'CSS'} />
                        <SkillsList.Skill src={require('img/javaIcon.jpg')} title={'Java'} />
                    </SkillsList>
                </Section>
                <Separator space="1em" />
            </Wrapper>
        </Fragment>
    );
}

export default AnimatedContainer(Home);
