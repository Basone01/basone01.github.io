import React from 'react';
import { ImgContentBox } from './imgContentBox';
import TypingMessage from './typingMessage'
export const Header = (props) => {
    return (
        <ImgContentBox src={props.src}>
            <TypingMessage msg={props.msg}/>
        </ImgContentBox>
    );
};
export default Header;