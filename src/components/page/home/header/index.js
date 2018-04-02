import React from 'react';
import { ImgContentBox } from './imgContentBox';
import TypingMessageBox from './typingMessage/';

export const Header = props => {
    return (
        <ImgContentBox src={require('img/headerBG.jpg')}>
            <TypingMessageBox msg={'Hi, Welcome...\nI am BASONE01.'} />
        </ImgContentBox>
    );
};
export default Header;
