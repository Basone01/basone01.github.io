import styled from "styled-components";

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
	transform: translateY(-110px);
	&> ${Separator} {
		max-width: 1024px;
		
	}
	
	@media only screen and (max-width:768px){
	  font-size: 0.5em;
	  padding: 0 5em;
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
	height: auto;
	border: 5px solid var(--black);
	margin-bottom: 1em;
	@media only screen and (max-width:768px){
	  width: 120px;
	}
	@media only screen and (max-width:384px){
	  width: 90px;
	}
`;

export {Separator, ProfilePic, Section};
