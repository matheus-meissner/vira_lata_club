import React from 'react';
import logoImg from '../assets/logo.jpg'; // ajuste conforme a imagem
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  AdoptButton
} from '../styles/Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
        <img src={logoImg} alt="Vira Lata Club" />
        </Logo>

        <Nav>
          <NavLink href="/">Início</NavLink>
          <NavLink href="/sobre">Quem Somos</NavLink>
          <NavLink href="/adocao">Pets</NavLink>
          <NavLink href="/desaparecidos">Desaparecidos</NavLink>
          <NavLink href="/testimonials">Depoimentos</NavLink>
          <NavLink href="/contato">Contato</NavLink>
        </Nav>

        <AdoptButton href="#adotar">Adotar agora</AdoptButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
