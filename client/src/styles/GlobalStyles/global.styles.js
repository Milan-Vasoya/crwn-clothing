import {createGlobalStyle} from 'styled-components';

export const GlobalStyles= createGlobalStyle`
body{
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 5px 30px;
    @media screen and (max-width:800px) {
        padding: 10px;
    }
}
a{
    text-decoration: none;
    color: black;
}
*{
    box-sizing: border-box;
}
`;