import React, { Component } from 'react';
import { AnimatedContainer, FlexDownCenter } from './shared/';
import styled from 'styled-components';

export class Resume extends Component {
	render() {
		return <FlexDownCenter>This is Resume.</FlexDownCenter>;
	}
}

export default AnimatedContainer(Resume);
