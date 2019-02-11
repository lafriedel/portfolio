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
}

h3 {
    font-size: 2rem;
}

p, a, span {
    font-size: 2.2rem;
    margin-bottom: 6px;
    line-height: 3rem;

    @media (max-width: 575px) {
        font-size: 1.8rem;
        line-height: 2.6rem;
    }
}

button {
    padding: 8px 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
}

a {
    color: #21ba75;
}
`;