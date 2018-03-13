import React, { Component } from 'react'
import styled from 'styled-components';
import NavItem from './navItem'


const Bar = styled.div`
    display: flex;
    position:fixed;
    padding: 0.25em 1em;
    justify-content:flex-end;
    top:0;
    left:0;
    right:0;
    z-index:1;
`


export default class NavBar extends Component {
  render() {
    return (
      <Bar>
        <NavItem exact to="/">Home</NavItem>
        <NavItem exact to="/works">My Works</NavItem>
        <NavItem exact to="/resume">Resume</NavItem>
        <NavItem exact to="/contact">Contact</NavItem>
      </Bar>
    )
  }
}
