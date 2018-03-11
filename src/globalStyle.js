import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css'

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
    body{
        background-color:#222;
        font-family:'Pridi', serif;
        color:#ddd;
        height:2000px;
        overflow:auto;
    }
`