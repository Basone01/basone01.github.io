import React, { Component, Fragment } from 'react';
import { AnimatedContainer, Flex, Text, HeadingText } from './shared/';
import Header from '../header/';
import styled from 'styled-components';




const StyledAboutSection = Flex.extend`
	min-height: 350px;
	padding: 0 10em;
	transform: translateY(-110px);
	& > * {
		border-bottom: 2px solid #FFF1;
	}
	@media only screen and (max-width:768px){
	  font-size: 0.5em;
	  padding: 0 5em;
	  transform: translateY(-60px);
	}
	@media only screen and (max-width:384px){
	  font-size: 0.5em;
	  padding: 0 0.5em;
	  transform: translateY(-50px);
	  
	}
`;

const ProfilePic = styled.img`
	border-radius: 50%;
	width: 180px;
	height: auto;
	border: 5px solid var(--black);
	margin-left: 1.5em;
	@media only screen and (max-width:768px){
	  width: 120px;
	}
	@media only screen and (max-width:384px){
	  width: 90px;
	}
`;

const AboutSection = (props) => (
	<StyledAboutSection direction="column" alignItems="stretch">
		<Flex justifyContent="center">
			<Flex fluid grow={1} direction="column" alignItems="stretch">
				<Flex fluid alignItems="baseline" justifyContent="center" style={{ marginBottom: '1em' }}>
					<h3>Surachet Sangasaeng</h3>
					<h3 style={{ padding: '0 0.1em' }}>|</h3>
					<p>Computer Science</p>
				</Flex>
				<Flex fluid direction="column">
					<HeadingText>About Me:</HeadingText>
					<Text indent justify	>
						Hi, I'm a Computer-Science student from KMUTNB. I start my programming life from C language
                        while I was studying Matthayom 5 and I liked it since then,
                        because it is only one subject that I can prove all answer by myself.
                        That's why decided to be a Computer-Science student. when I was studiying in the university,
                        I met many programming language, many problem and got some skills form them,
                        And now I'm looking for an opportunity to use them to make something great.
					</Text>
				</Flex>
			</Flex>
			<ProfilePic src={require('../../img/profilePic.jpg')} />
		</Flex>
		<Flex direction="column" alignItems="stretch">
			<HeadingText center>"  You can see other's mistake more than your mistake, </HeadingText>
			<HeadingText center>and you can see other's bugs more than your bugs  "</HeadingText>
		</Flex>
	</StyledAboutSection>
);

export class Home extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<AboutSection />
			</Fragment>
		);
	}
}

export default AnimatedContainer(Home);
