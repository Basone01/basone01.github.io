import React, { Fragment } from 'react';
import { Flex, Text, HeadingText } from 'components/shared/';
import { Section, ProfilePic } from './home.styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <Fragment>
            {/* ABOUT ME SECTION */}
            <Section
                style={{
                    transform: 'translateY(-72px)',
                    marginBottom: '-90px',
                    padding: '0 2em'
                }}
            >
                <Flex fluid jc="center" ali="center">
                    <Flex fluid grow={1} dir="column" ali="stretch">
                        <Flex fluid ali="baseline" jc="center">
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
                        <Flex dir="column">
                            <HeadingText top="0" bottom="0.25em">
                                ABOUT ME:
                            </HeadingText>
                            <Text indent justify>
                                Hi, My name's Bas. I'm a Computer-Science student from KMUTNB.
                                Programming has come to my life while I was studying Matthayom 5, It
                                start from C language and I liked it since then, because it is only
                                one subject that I can prove all answer by myself. That's why
                                decided to be a Computer-Science student.
                            </Text>
                            <Text indent justify top="0">
                                Until now, I met many programming language, many problem and got
                                some skills form them, And now I'm looking for an opportunity to use
                                them to make something great.
                            </Text>
                        </Flex>
                    </Flex>

                    {/* PROFILE PIC SIDE */}

                    <Flex
                        fluid
                        dir="column"
                        ali="center"
                        style={{ transform: 'translateY(-50px)' }}
                    >
                        <ProfilePic src={require('img/profilePic.jpg')} />
                        <HeadingText center>THIS IS ME !!!</HeadingText>
                    </Flex>
                </Flex>
            </Section>

            {/* INFO SECTION */}

            <Section>
                <Flex fluid als="stretch" jc="center">
                    <Flex hPad dir="column" ali="stretch">
                        <HeadingText center bottom="0.5em">
                            Personal Info.
                        </HeadingText>
                        <HeadingText small bottom="0">
                            Full name :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            Surachet Sangasaeng
                        </Text>
                        <HeadingText small bottom="0">
                            Nickname :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            Bas
                        </Text>
                        <HeadingText small bottom="0">
                            Date of Birth :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            19 Oct 1995
                        </Text>
                        <HeadingText small bottom="0">
                            Hobbies :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            <a
                                target=" _blank"
                                rel="noopener noreferrer"
                                href="http://www.instagram.com/basone01"
                            >
                                <FontAwesomeIcon fixedWidth icon="camera-retro" size="2x" />
                            </a>
                            <FontAwesomeIcon fixedWidth icon="headphones" size="2x" />{' '}
                            <FontAwesomeIcon fixedWidth icon="gamepad" size="2x" />
                        </Text>
                    </Flex>

                    <Flex hPad dir="column" ali="stretch">
                        <HeadingText center bottom="0.5em">
                            Contact
                        </HeadingText>
                        <HeadingText small bottom="0">
                            Email :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            <a href="mailto:basone01@hotmail.com">
                                <FontAwesomeIcon fixedWidth icon="envelope" size="lg" />{' '}
                                basone01@hotmail.com
                            </a>
                        </Text>
                        <HeadingText small bottom="0">
                            Telephone :
                        </HeadingText>
                        <Text indent bottom="0.5em">
                            <FontAwesomeIcon fixedWidth icon="phone-square" size="lg" /> 081-7650133
                        </Text>
                        <HeadingText small bottom="0">
                            Socials :
                        </HeadingText>
                        <Text indent>
                            <a
                                target=" _blank"
                                rel="noopener noreferrer"
                                href="http://github.com/basone01"
                            >
                                <FontAwesomeIcon fixedWidth icon={['fab', 'github']} size="lg" />{' '}
                                Github : basone01
                            </a>
                        </Text>
                        <Text indent>
                            <a
                                target=" _blank"
                                rel="noopener noreferrer"
                                href="http://fb.com/basone01"
                            >
                                <FontAwesomeIcon fixedWidth icon={['fab', 'facebook']} size="lg" />{' '}
                                Facebook : basone01
                            </a>
                        </Text>
                        <Text indent>
                            <a
                                target=" _blank"
                                rel="noopener noreferrer"
                                href="http://line.me/ti/p/~basone01"
                            >
                                <FontAwesomeIcon fixedWidth icon={['fab', 'line']} size="lg" /> Line
                                : basone01
                            </a>
                        </Text>
                    </Flex>
                </Flex>
            </Section>
        </Fragment>
    );
};
