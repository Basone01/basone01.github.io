import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'

const blink = keyframes`
        0%,60% {
            opacity:1;
        }
        
        100% {
            opacity:0;
        }  
`

const MessageBox = styled.div`
    display:inline-block;
    position:relative;
    user-select:none;
    &:after{
        content:"|";
        position:absolute;
        top:0;
        bottom:0;
        left:100%;
        animation: ${blink} 1s linear infinite;
         
    }

    
`

export default class TypingMessage extends Component {
    constructor(props){
        super(props);
        this.state={
            isCursorDisplay:true,
            message:"",
        }
    }

    componentDidMount(){
        //typing
        const { msg } = this.props;
        let i=0;
        for(let c of msg){
            i++;
            const snapshotMsg = msg.substr(0,i);
            setTimeout(()=>{
                this.setState({message:snapshotMsg});
            },i*300)
        }
        //cursor blinking
        setInterval(()=>{
            this.setState({isCursorDisplay:!this.state.isCursorDisplay});
        },750);
    }

    render() {
        const {message,isCursorDisplay}=this.state;
        return (
        <MessageBox cursor={isCursorDisplay.toString()}>
            {message}
        </MessageBox>
        )
    }
}
