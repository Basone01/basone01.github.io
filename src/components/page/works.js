import React, { Component } from 'react';
import { AnimatedContainer, Flex } from '../shared/';

export class Works extends Component {
    render() {
        return (
            <Flex jestifyContent="center" ali="center">
                This is Works.
            </Flex>
        );
    }
}
export default AnimatedContainer(Works);
