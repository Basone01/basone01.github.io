import React, { Component } from 'react';
import styled from 'styled-components';
import MessageBox from './messageBox';

const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default class TypingMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speed: 200
		};
	}

	renderMessage() {
		const { msg } = this.props;
		const { speed } = this.state;
		if (!msg) return;
		let breakedMSG = msg.split('\n');
		return breakedMSG.map((msgLine, index) => {
			let wait = 0;
			if (index > 0) {
				wait = breakedMSG[index - 1].length * speed;
			}

			let animationLoop = Math.floor(msgLine.length * speed/1000);//1000 come from blink animate every 1 sec
			return (
				<MessageBox
					msg={msgLine}
					key={index}
					index={index}
					wait={wait}
					speed={speed}
					loop={animationLoop}
					last={breakedMSG.length - 1 === index}
				/>
			);
		});
	}

	render() {
		return <MessageContainer>{this.renderMessage()}</MessageContainer>;
	}
}
