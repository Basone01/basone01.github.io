import React, { Component } from 'react';
import { ImgContentBox } from './imgContentBox';
import TypingMessage from './typingMessage'
export const Header = (props) => {
    return (
        <ImgContentBox src={props.src}>
            <TypingMessage msg={props.msg}></TypingMessage>
        </ImgContentBox>
    );
};
export default Header;