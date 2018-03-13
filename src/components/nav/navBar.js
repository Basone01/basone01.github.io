import React, { Component } from 'react'
import styled from 'styled-components';
import NavItem from './item'

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
        <NavItem>Item1</NavItem>
        <NavItem>Item2</NavItem>
        <NavItem>Item3</NavItem>
        <NavItem>Item4</NavItem>
        <NavItem>Item5</NavItem>
      </Bar>
    )
  }
}
