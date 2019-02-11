import React from 'react';
import styled from 'styled-components';
import '../../styles/cssans.min.css';

const HeaderContainer = styled.div`
width: 85%;

@media (max-width: 800px) {
    width: 100%;

    [class^="cssans:"] {
        font-size: 2.76rem;
    }
}

@media (max-width: 575px) {
    [class^="cssans:"] {
        font-size: 1.85rem;
    }
}

/* @media (max-width: 575px) {
    h1 {
        font-size: 6rem;
    }
} */
`;
const Header = props => {
    return (
<HeaderContainer>
<div class="cssans cssans--left">
    <div class="cssans__accessible">Leigh-Ann Friedel</div>

    <div class="cssans__word">
        <b class="cssans:L"></b>
        <b class="cssans:e"></b>
        <b class="cssans:i"></b>
        <b class="cssans:g"></b>
        <b class="cssans:h"></b>
        <b class="cssans:-"></b>
        <b class="cssans:A"></b>
        <b class="cssans:n"></b>
        <b class="cssans:n"></b>
    </div>

    <div class="cssans__word">
        <b class="cssans:F"></b>
        <b class="cssans:r"></b>
        <b class="cssans:i"></b>
        <b class="cssans:e"></b>
        <b class="cssans:d"></b>
        <b class="cssans:e"></b>
        <b class="cssans:l"></b>
    </div>
</div>
</HeaderContainer>
    )
}

export default Header;