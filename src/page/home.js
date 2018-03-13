import React, { Component } from 'react';
import AnimatedContainer from './animatedContainer'
import Header from '../components/header/';


export class Home extends Component {
	render() {
		const message=`Hi, Welcome...\nI am Basone01`
		return (
			<Header src={require('../img/headerBG.jpg')} msg={message} />
		);
	}
}

export default AnimatedContainer(Home);
