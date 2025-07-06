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

        <AdoptButton href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdSci6Hras_nxwBDkXJ2RIhNIQKSnLREJbZIzEpBLjIHdtqpg%2Fviewform%3Fusp%3Dsharing%26fbclid%3DPAZXh0bgNhZW0CMTEAAadxtX7GZVoqhDwQ397I1qd0694OTHnIzes42iqFOoNNJfxC--VHCl9ER7fElQ_aem_pjKjt6CpuDE_lPUwKlHxPw&e=AT1z_O0fOUEElyr5M2wZCY6Fzk2bIaDtbxRJoS1rGadGHdm0SoVxra4M-nb9IIykjuEZDZ3AzzzC6Ob9crToiHszChXac8UODCYL394">Adotar agora</AdoptButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
