import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home, Contact, Works, Resume } from './page/';
import NavBar from './components/nav/';

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/works" component={Works} />
				<Route exact path="/resume" component={Resume} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Fragment>
		);
	}
}

export default App;
