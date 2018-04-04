import React, { Component } from 'react';
import { Bar, NavHead, NavItem } from './nav.styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
            isShow: false
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
        const { isShow, fixed } = this.state;
        return (
            <Bar
                ref={nav => {
                    this.me = nav;
                }}
                fixed={fixed}
            >
                <NavHead
                    isShow={this.state.isShow}
                    onClick={() => this.setState({ isShow: !isShow })}
                >
                    <FontAwesomeIcon size="md" icon="chevron-circle-left" />
                </NavHead>
                {isShow && (
                    <div>
                        <NavItem animate={0.5} exact replace to="/">
                            Home
                        </NavItem>
                        <NavItem animate={1} replace to="/resume">
                            Resume
                        </NavItem>
                    </div>
                )}
            </Bar>
        );
    }
}
