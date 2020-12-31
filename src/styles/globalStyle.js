import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "styles/index.css";

const GlobalStyle = createGlobalStyle `
    ${reset}
    *{
        box-sizing:border-box;
        outline:none;
        font-family: 'Noto Sans KR' , sans-serif !important;
    }
    body{
        font-size:14px;
        height:100%;
        background:#fff;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
 
`;

export default GlobalStyle;