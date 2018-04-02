import styled from 'styled-components';

export const ImgContentBox = styled.div`
    display:flex;
    position:relative;
    height:50vh;
    background-color:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
    font-size:2rem;
    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-image:url(${props=>props.src});
        background-color:black;
        background-position:bottom;
        background-repeat:no-repeat;
        background-size:cover;
        z-index:-1;
    }

`;