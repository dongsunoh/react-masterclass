import React from 'react';
import Router from "./Router";
import {createGlobalStyle} from "styled-components";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital@0;1&display=swap');
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: "Source Sans 3", sans-serif;
        background-color: ${(props) => props.theme.bgColor};
        color : ${(props) => props.theme.textColor}
    }
    
    a {
        text-decoration: none;
        color:inherit;
    }
`;

function App() {

    return (
        <>
            <GlobalStyle/>
            <Router/>
            <ReactQueryDevtools initialIsOpen={true}/>
        </>
    );
}

export default App;
