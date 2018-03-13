import React, { Component } from 'react';
import { AnimatedContainer } from './shared/';
import Header from '../components/header/';

export class Home extends Component {
	render() {
		return <Header src={require('../img/headerBG.jpg')} />;
	}
}

export default AnimatedContainer(Home);
