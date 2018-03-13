import React from 'react';
import { ImgContentBox } from './imgContentBox';
import TypingMessageBox from './typingMessage/'
export const Header = (props) => {
    return (
        <ImgContentBox src={props.src}>
            <TypingMessageBox msg={props.msg}/>
        </ImgContentBox>
    );
};
export default Header;