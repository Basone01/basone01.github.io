import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Resume } from './components/page/';
import NavBar from './components/nav/';
import './fontAwesomeInit';
class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div style={{ overflow: 'hidden' }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resume" component={Resume} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default App;
