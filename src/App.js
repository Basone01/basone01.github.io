import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Contact, Works, Resume } from './page/';
import NavBar from './components/nav/';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/works" component={Works} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
