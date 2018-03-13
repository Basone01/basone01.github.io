import React, { Component,Fragment } from 'react';
import Header from './components/header/';
import NavBar from './components/nav/'
class App extends Component {
	render() {
		return <Fragment>
					<NavBar>sdkjfhkjsdfkj</NavBar>
					<Header src={require("./img/headerBG.jpg")} msg="Hi, Welcome..." />
				</Fragment>
		
	}
}

export default App;
