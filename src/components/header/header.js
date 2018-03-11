import React, { Component } from 'react'
import styled from 'styled-components';

export const Header = styled.div`
    display:flex;
    position:relative;
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
    
    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-image:url(${props=>props.src});
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        z-index:-1;
    }



`;

export default Header;