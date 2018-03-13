import React, { Component, Fragment } from 'react';
import { Switch, Route, IndexRoute} from 'react-router-dom';
import { Home, Contact, Works, Resume } from './page/';
import NavBar from './components/nav/';

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					
					<Route exact path="/" component={Home} />
					<Route exact path="/works" component={Works} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/contact" component={Contact} />
					
				</Switch>
			</Fragment>
		);
	}
}

export default App;
