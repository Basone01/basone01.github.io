import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';

injectGlobal`
    /* @import url('https://fonts.googleapis.com/css?family=Pridi:400,700'); */
    @font-face {
        font-family: Pridi;
        src: url(${require('./localFonts/Pridi-Regular.ttf')});
    }
    @font-face {
        font-family: Pridi;
        src: url(${require('./localFonts/Pridi-SemiBold.ttf')});
        font-weight:bold;
    }

    :root{
        font-size:20px;
        --white:#bdbdbd;
        --black:#222;
    }
        
    *{
        box-sizing:border-box;
    }

    

    body{
        background-color:var(--black);
        font-family:'Pridi', serif;
        color:var(--white);
        height:2000px;
        overflow:auto;
        font-size:1rem;
        overflow-x:hidden;
        
        &::-webkit-scrollbar{
            width: 2px;
        }
        
        &::-webkit-scrollbar-track{
            /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
            background-color: var(--black);
            
        }


        &::-webkit-scrollbar-thumb{
            
            background-color: var(--white);
            
            width:5px;
            
        }
    }

    

`;
