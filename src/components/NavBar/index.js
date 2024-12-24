import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Nav = styled.div`
    backgrouind-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    widthL 100%;
    padding 0 24px;
    max-width: 1200px;
`;

const NavBar = () => {
    return (
    <Nav>
        <NavContainer>
            <NavLogo>Logo</NavLogo>
            <MobileIcon></MobileIcon>
            <NavItems>
                <NavLink>Home</NavLink>
            </NavItems>
            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
    );
};

export default NavBar;