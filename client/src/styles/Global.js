import { css } from 'styled-components';

export const Global = css`
html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
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
    font-size: 1.8rem;
    margin-bottom: 8px;
}

button {
    padding: 8px 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
}
`;