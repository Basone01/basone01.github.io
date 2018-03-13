import React, { Component } from 'react';
import Header from '../components/header/';


export default class Home extends Component {
	render() {
		return (
			<Header src={require('../img/headerBG.jpg')} msg="Hi, Welcome..." />
		);
	}
}
