import React, { Component } from 'react';
import { ImgContentBox } from './header.styled';
import TypingMessage from './typingMessage'
export const Header = (props) => {
    return (
        <ImgContentBox src={props.src}>
            <TypingMessage msg={props.msg}></TypingMessage>
        </ImgContentBox>
    );
};
export default Header;