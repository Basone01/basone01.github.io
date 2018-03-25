import React, { Component, Fragment } from 'react';
import { AnimatedContainer, Flex, Text, HeadingText } from './shared/';
import Header from '../components/header/';
import styled from 'styled-components';




const StyledAboutSection = Flex.extend`
	min-height: 350px;
	padding: 0 10em;
	transform: translateY(-110px);
	& > * {
		border-bottom: 2px solid #FFF1;
	}
`;

const ProfilePic = styled.img`
	border-radius: 50%;
	width: 180px;
	height: auto;
	border: 5px solid var(--black);
	margin-left: 1.5em;
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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores error quia consequuntur,
						neque quibusdam nam possimus ipsam, doloribus provident eum corporis, quae officiis aut vero!
						Quaerat, quisquam necessitatibus. Odit, veniam?
					</Text>
				</Flex>
			</Flex>
			<ProfilePic src={require('../img/profilePic.jpg')} />
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
