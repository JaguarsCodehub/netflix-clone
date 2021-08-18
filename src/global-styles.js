import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: 'Helvetica Neue',  Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;

     ::-webkit-scrollbar{
                width: 8px;
                margin-right: 5px;
                background: transparent;
    
    }

    ::-webkit-scrollbar-thumb{
        background: #8d8d8d;
        border-radius: 15px;
    
    }
    }
`