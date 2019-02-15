import { css } from 'styled-components';

export const Global = css`
* {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    background: #FCFAFA;
    color: #222;
}

h2, h3 {
    font-weight: 700;
    margin-bottom: 20px;
}

h1 {
    font-weight: 900;
    font-size: 9rem;
    margin-bottom: 40px;
}

h2 {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #222;
    padding: 3px 5px;
    letter-spacing: .1rem;
/* 
    @media (max-width:575px) {
        text-align: center;
    } */
}

h3 {
    font-size: 2.6rem;
}

p, a, span {
    font-size: 1.8rem;
    margin-bottom: 6px;
    line-height: 3rem;

    @media (max-width: 575px) {
        font-size: 1.6rem;
        line-height: 2.6rem;
    }
}

button {
    padding: 8px 12px;
    margin: 15px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    border: 2px solid #B1EDCE;
    border-radius: 3px;
    background: #B1EDCE;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: 0.1s;
    }
}

a {
    color: #ED1576;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.section {
    background: #DADADA;
    width: 115px;
/* 
    @media (max-width:575px) {
        margin: 0 auto;
    } */
}
`;