import React from 'react';
import { ImgContentBox } from './imgContentBox';
import TypingMessageBox from './typingMessage/'

export const Header = (props) => {
    return (
        <ImgContentBox src={props.src}>
            <TypingMessageBox msg={"Hi, Welcome\nI am Basone01."}/>
        </ImgContentBox>
    );
};
export default Header;