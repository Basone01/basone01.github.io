import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from {
        opacity:0;
		transform:scale(1.2);
    }
    to {
        opacity:1;
		transform:scale(1);	
    }
`;

const Container = styled.div`
    display: block;
    animation: ${FadeIn} 0.5s ease-in-out;
`;

export const AnimatedContainer = ChildComponent => {
    return class AnimatedContainer extends Component {
        render() {
            return (
                <Container>
                    <ChildComponent {...this.props} />
                </Container>
            );
        }
    };
};
export default AnimatedContainer;
