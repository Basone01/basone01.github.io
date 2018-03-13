import React, { Component } from 'react';
import styled from 'styled-components';
import MessageBox from './messageBox';

const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content:center;
`;

export default class TypingMessage extends Component {
	constructor(props) {
		super(props);
		this.state={
			speed:300
		}
	}

	renderMessage() {
		const { msg } = this.props;
		const { speed } = this.state;

		let breakedMSG = msg.split('\n');
		return breakedMSG.map((msgLine, index) => {
			let wait=0;
			if(index>0){
				wait=breakedMSG[index - 1].length * speed;
			}
			console.log(wait);
			
			let animationLoop = Math.floor(msgLine.length*0.3);
			return <MessageBox 
					msg={msgLine} 
					key={index} 
					index={index}
					wait={wait}
					speed={speed}
					loop={animationLoop} 
					last={breakedMSG.length - 1 === index} 
					/>;
		});
	}

	render() {
		return <MessageContainer>
			{this.renderMessage()}
		</MessageContainer>;
	}
}
