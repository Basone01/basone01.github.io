import React, { Component } from 'react';
import { AnimatedContainer, Flex } from '../shared/';

export class Journeys extends Component {
    render() {
        return (
            <Flex jestifyContent="center" ai="center">
                This is Works Journeys{' '}
            </Flex>
        );
    }
}
export default AnimatedContainer(Journeys);
