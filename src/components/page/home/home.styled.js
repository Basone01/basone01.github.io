import styled, {keyframes} from "styled-components";
import {Flex, Text} from "components/shared";
import React from "react";

const Separator = styled.div`
  display: block;
  border-bottom: 2px solid #FFF1;
  width: 100%;
`;
const Section = styled.div`
	min-height: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	&> * {
		max-width: 1024px;
		
	}
	
	@media only screen and (max-width:768px){
	  font-size: 0.5em;
	  padding: 0 2em;
	  transform: translateY(-60px);
	}
	@media only screen and (max-width:384px){
	  font-size: 0.5em;
	  padding: 0 0.5em;
	  transform: translateY(-50px);
	  
	}
`;


const ProfilePic = styled.img`
	border-radius: 50%;
	width: 180px;
	height: 180px;
	border: 5px solid var(--black);
	margin-bottom: 1em;
	object-fit: cover;
	@media only screen and (max-width:768px){
	  width: 120px;
	  height: 120px;
	}
	@media only screen and (max-width:384px){
	  width: 90px;
	  height: 90px;
	}
`;

const MeterEffect = keyframes`
  from{
    right:100%;
  }
  to{
    right:${props => props.percent || '0'}%;
  }
`


const Meter = styled.div`
  height: 0.75em;
  border: 2px solid var(--white);
  margin:0.5em 1em ;
  width: 20em;
  background: var(--white);
  position:relative;
  border-radius: 4px;
  &::after{
    content: '';
    position:absolute;
    left: 0;
    right: ${props => 100 - props.percent || 0}%;
    top: 0;
    bottom: 0;
    background-color:${props => props.color || 'var(--black)'};
    z-index: 1;
    animation: ${MeterEffect} 2s;
  }
`;


const WorkStyle = (props) => (
    <Flex fluid alignItems="baseline">
        <Flex fluid basis="40%" alignItems="stretch" direction="column">
            <Text textAlign="right">{props.title}</Text>
        </Flex>
        <Flex fluid basis="60%" alignItems="stretch" direction="column">
            <Meter percent={props.percent}/>
        </Flex>
    </Flex>
);

export {Separator, ProfilePic, Section, WorkStyle};
