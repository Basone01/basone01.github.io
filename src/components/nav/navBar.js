import React, { Component } from 'react';
import { Bar } from './nav.styled';

import NavItem from './navItem';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                this.setState({
                    fixed: true
                });
            } else if (window.scrollY === 0) {
                this.setState({
                    fixed: false
                });
            }
        });
    }

    render() {
        return (
            <Bar
                ref={nav => {
                    this.me = nav;
                }}
                fixed={this.state.fixed}
            >
                <NavItem exact replace to="/">
                    Home
                </NavItem>
                <NavItem replace to="/resume">
                    Resume
                </NavItem>
            </Bar>
        );
    }
}
