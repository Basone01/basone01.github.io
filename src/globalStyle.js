import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

    :root{
        font-size:20px;
        --white:#bdbdbd;
        --black:#222;
    }
        
    *{
        box-sizing:border-box;
        /* border:1px solid white; */
    }

    

    body{
        background-color:var(--black);
        font-family:'Roboto', serif;
        color:var(--white);
        /* height:2000px; */
        overflow:auto;
        font-size:1rem;
        overflow-x:hidden;
        
        &::-webkit-scrollbar{
            width: 2px;
        }
        
        &::-webkit-scrollbar-track{
            background-color: var(--black);
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--white);
            width:5px;
        }
    }

    a{
        text-decoration:none;
        color: inherit;
        transition: color 0.5s,text-shadow 0.5s;
        &:hover{
            color:white;
            text-shadow:0 0 0.2em white;
        }
    }
    

`;
