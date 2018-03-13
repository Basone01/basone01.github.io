import React, { Component } from 'react'
import StyledMessageBox from './messageBox.styled'

export default class MessageBox extends Component {
	constructor(props) {
		super(props);
		const { index, msg } = props;
		this.state = {
			message: '',
			timeout: null,
		};
	}

	setupTypingAnimation() {
		const { msg, index, wait, speed } = this.props;
		const timeout = msg.split('').map((c, i) => {
			const snapshotMsg = msg.substr(0, i + 1);
			return setTimeout(() => {
				this.setState({ message: snapshotMsg });
			}, wait + (i + 1) * speed);
		});
		this.setState({ timeout });
	}

	cancelAllAnimation() {
		this.state.timeout.forEach(clearTimeout);
	}

	componentDidMount() {
		this.setupTypingAnimation();
	}

	componentWillUnmount() {
		this.cancelAllAnimation();
	}

	render() {
		const { message } = this.state;
		const {wait, last, loop } = this.props;
		return (
			<StyledMessageBox delay={wait} blinkLoop={loop} last={last}>
				{message}
			</StyledMessageBox>
		);
	}
}