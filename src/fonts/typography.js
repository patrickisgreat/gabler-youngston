import React from "react";
import { createGlobalStyle } from "styled-components";
import FuturaKoyuWoff from "./Futura-Koyu/Futura-Koyu.woff";
import FuturaKoyuWoff2 from "./Futura-Koyu/Futura-Koyu.woff2";
import GothamBookOtf from "./Gotham-Book/Gotham-Book.otf";
import GothamBookWoff from "./Gotham-Book/Gotham-Book.woff";
import GothamBookWoff2 from "./Gotham-Book/Gotham-Book.woff2";

const Typography = () =>{
    const GlobalTypography =  createGlobalStyle`
        @font-face {
            font-family:"Futura-Koyu";
            src:url(${FuturaKoyuWoff2}) format("woff2"),url(${FuturaKoyuWoff}) format("woff");
            font-style:normal;font-weight:300;
        }

        @font-face {
            font-family:"Gotham-Book";
            src:url(${GothamBookWoff2}) format("woff2"),url(${GothamBookWoff}) format("woff"),url(${GothamBookOtf}) format("opentype");
            font-style:normal;font-weight:400;
        }

        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            font-family: "Gotham-Book", sans-serif;
            font-size: 18px;
        }
        .navbar-item, h1, h2, h3, h4, h5, h6 {
            font-family: "Futura-Koyu", sans-serif;
            font-weight: 300;
        }
        
    `;

    return  <GlobalTypography />

}

export default Typography