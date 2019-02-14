import React from 'react';
import styled from 'styled-components';
import '../../styles/cssans.min.css';

const HeaderContainer = styled.div`
width: 85%;

@media (max-width: 800px) {
    width: 100%;

    [className^="cssans:"] {
        font-size: 2.76rem;
    }
}

@media (max-width: 575px) {
    [className^="cssans:"] {
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
<div className="cssans cssans--left">
    <div className="cssans__accessible">Leigh-Ann Friedel</div>

    <div className="cssans__word">
        <b className="cssans:L"></b>
        <b className="cssans:e"></b>
        <b className="cssans:i"></b>
        <b className="cssans:g"></b>
        <b className="cssans:h"></b>
        <b className="cssans:-"></b>
        <b className="cssans:A"></b>
        <b className="cssans:n"></b>
        <b className="cssans:n"></b>
    </div>

    <div className="cssans__word">
        <b className="cssans:F"></b>
        <b className="cssans:r"></b>
        <b className="cssans:i"></b>
        <b className="cssans:e"></b>
        <b className="cssans:d"></b>
        <b className="cssans:e"></b>
        <b className="cssans:l"></b>
    </div>
</div>
</HeaderContainer>
    )
}

export default Header;