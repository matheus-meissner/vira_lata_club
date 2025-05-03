import React from 'react';
import {
  HeroSection,
  HeroContent,
  TextContainer,
  Title,
  Subtitle,
  ActionButton,
  ImageContainer,
  HeroImage
} from '../styles/Hero.styles';
import dogImage from '../assets/hero-dog.jpg'; // ajuste conforme a imagem

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContainer>
          <Title>Encontre um amigo fiel para a vida inteira.</Title>
          <Subtitle>Adoção responsável começa com um simples gesto de amor.</Subtitle>
          <ActionButton href="#pets">Ver pets disponíveis</ActionButton>
        </TextContainer>
        <ImageContainer>
          <HeroImage src={dogImage} alt="Família com cachorro feliz" />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
