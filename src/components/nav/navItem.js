import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	padding: 0.5em 1em;
	user-select: none;
	color: var(--white);
	cursor: pointer;
    text-decoration:none;
	transition: color 0.5s;
	transition: text-shadow 0.5s;
	&:before {
		content: '';
		display: block;
		position: absolute;
		background-color: var(--white);
		height: 0.1em;
		bottom: 5%;
		left: 50%;
		right: 50%;
		transition: all 0.25s ease-out;
	}
	&:hover,
    &.active{
		text-shadow: 0 0 0.125em var(--white);
		&:before {
			left: 10%;
			right: 10%;
		}
	}
`;

export default NavItem;
