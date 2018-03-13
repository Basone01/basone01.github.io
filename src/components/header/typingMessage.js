import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
        0%,60% {
            opacity:1;
        }
        
        100% {
            opacity:0;
        }  
`;

const MessageBox = styled.div`
	display: inline-block;
	position: relative;
	user-select: none;
	&:after {
		content: "|";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 100%;
		animation: ${blink} 1s linear infinite;
	}
`;

export default class TypingMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCursorDisplay: true,
			message: '',
			timeout: null,
			interval: null
		};
	}

	setupTypingAnimation() {
		const { msg } = this.props;
		const template = '';
		const timeout = msg.split('').map((c, i) => {
			const snapshotMsg = msg.substr(0, i+1);
			return setTimeout(() => {
				this.setState({ message: snapshotMsg });
			}, i * 300);
		});
		this.setState({ timeout });
	}

	setupCursorAnimation() {
		const interval = setInterval(() => {
			this.setState({ isCursorDisplay: !this.state.isCursorDisplay });
		}, 750);
		this.setState({ interval });
	}

	cancelAllAnimation() {
		this.state.timeout.forEach(clearTimeout);
		clearInterval(this.state.interval);
	}

	componentDidMount() {
		this.setupTypingAnimation();
		this.setupCursorAnimation();
	}

	componentWillUnmount() {
        this.cancelAllAnimation();
    }

	render() {
		const { message, isCursorDisplay } = this.state;
		return <MessageBox cursor={isCursorDisplay.toString()}>{message}</MessageBox>;
	}
}
