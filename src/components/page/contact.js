import React, { Component } from 'react';
import { AnimatedContainer, Flex } from '../shared/';
export class Contact extends Component {
	render() {
		return (
			<Flex jestifyContent="center" ai="center">
				This is Contact.
			</Flex>
		);
	}
}

export default AnimatedContainer(Contact);
