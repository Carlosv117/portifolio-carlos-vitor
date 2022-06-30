import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --White: #FFFFFF;
    --White-1: #adadad;
    --Grey-1: #00000017;
    --Color-primary: #e00e0e;
    --Color-primary-focus: #e00e0ec2;
    --Color-primary-negative: #770000;
    --Black-0: #000000;
    --Black-1: #171717;
    --Sucess: #3FE864;
    --Negative: #E83F5B;
}
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
	box-sizing: border-box;
}
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
button, select {
	cursor: pointer;
}
textarea:focus {
    outline: none;
}
body {
	font-family: 'Comfortaa', sans-serif;
}
h1, h2, h3, p, span, a{
    color: var(--White);
}
h1 {
    font-weight: 700;
    font-size: 18px;
}
h2 {
    font-weight: 600;
    font-size: 16px;
}
h3 {
    font-weight: 500;
    font-size: 16px;
}
p {
    font-weight: 500;
    font-size: 14px;
}
a{
    font-weight: 500;
    font-size: 14px; 
}
span {
    font-weight: 400;
    font-size: 12px;
}
`;

export default GlobalStyle;