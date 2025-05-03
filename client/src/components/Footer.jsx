import React from 'react';
import logoImg from '../assets/logo.jpg'; // ajuste conforme a imagem
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  Logo,
  Description,
  Links,
  LinkItem,
  SocialIcons,
  Newsletter,
  NewsletterInput,
  NewsletterButton,
  FooterBottom
} from '../styles/Footer.styles';

import { FaFacebookF, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <img src={logoImg} alt="Vira Lata Club" />
          <Description>
            Somos uma ONG dedicada a encontrar lares amorosos para nossos amigos de quatro patas.
          </Description>
        </FooterColumn>

        <FooterColumn>
          <h4>Links Úteis</h4>
          <Links>
            <LinkItem href="#">Como Adotar</LinkItem>
            <LinkItem href="#">Dicas de Cuidados</LinkItem>
            <LinkItem href="#">Doe</LinkItem>
            <LinkItem href="#">Voluntariado</LinkItem>
          </Links>
        </FooterColumn>

        <FooterColumn>
          <h4>Conecte-se</h4>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </SocialIcons>
          <Newsletter>
            <NewsletterInput type="email" placeholder="Seu e-mail" />
            <NewsletterButton><FaPaperPlane /></NewsletterButton>
          </Newsletter>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        © 2025 PetAdote. Todos os direitos reservados.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
