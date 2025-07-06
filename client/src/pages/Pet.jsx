import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  BackLink,
  Content,
  ImageSection,
  MainImage,
  ThumbnailWrapper,
  Thumbnail,
  InfoSection,
  Title,
  SubInfo,
  Traits,
  Trait,
  Description,
  AdoptBox,
  AdoptButton,
  ContactInfo,
} from '../styles/Pet.styles';

import lunaImg from '../assets/luna.jpeg';
import maxImg from '../assets/max.jpeg';
import thorImg from '../assets/thor.jpeg';

const pets = [
  {
    name: 'Luna',
    age: '2 anos',
    breed: 'Golden Retriever',
    traits: ['Dócil', 'Brincalhona'],
    weight: '25kg',
    image: lunaImg,
    images: [lunaImg, lunaImg, lunaImg],
    description: 'Luna é super companheira...',
    characteristics: ['Dócil', 'Ativa', 'Vac.'],
  },
  {
    name: 'Max',
    age: '1 ano',
    breed: 'Border Collie',
    traits: ['Inteligente', 'Esperto'],
    weight: '22kg',
    image: maxImg,
    images: [maxImg, maxImg, maxImg],
    description: 'Max adora correr e brincar...',
    characteristics: ['Obediente', 'Brincalhão'],
  },
  {
    name: 'Thor',
    age: '6 meses',
    breed: 'Labrador',
    traits: ['Fofo', 'Calmo'],
    weight: '18kg',
    image: thorImg,
    images: [thorImg, thorImg, thorImg],
    description: 'Thor é um amorzinho de filhote...',
    characteristics: ['Calmo', 'Amigável'],
  },
];

const Pet = () => {
  const { name } = useParams();
  const pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (!pet) return <p>Pet não encontrado.</p>;

  return (
    <Container>
      <BackLink to="/">← Voltar para pets disponíveis</BackLink>
      <Content>
        <ImageSection>
          <MainImage src={pet.images[0]} alt={pet.name} />
          <ThumbnailWrapper>
            {pet.images.map((img, i) => (
              <Thumbnail key={i} src={img} alt={`img-${i}`} />
            ))}
          </ThumbnailWrapper>
        </ImageSection>

        <InfoSection>
          <Title>{pet.name}</Title>
          <SubInfo>📅 {pet.age} • 🐶 {pet.breed} • ⚖️ {pet.weight}</SubInfo>

          <h3>Características</h3>
          <Traits>
            {pet.characteristics.map((char, i) => (
              <Trait key={i}>{char}</Trait>
            ))}
          </Traits>

          <h3>Sobre {pet.name}</h3>
          <Description>{pet.description}</Description>

          <AdoptBox>
            <strong>Pronto para adotar o {pet.name}?</strong>
            <p>Entre em contato conosco e inicie o processo de adoção!</p>
            <AdoptButton target="_blank" href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdSci6Hras_nxwBDkXJ2RIhNIQKSnLREJbZIzEpBLjIHdtqpg%2Fviewform%3Fusp%3Dsharing%26fbclid%3DPAZXh0bgNhZW0CMTEAAadxtX7GZVoqhDwQ397I1qd0694OTHnIzes42iqFOoNNJfxC--VHCl9ER7fElQ_aem_pjKjt6CpuDE_lPUwKlHxPw&e=AT1z_O0fOUEElyr5M2wZCY6Fzk2bIaDtbxRJoS1rGadGHdm0SoVxra4M-nb9IIykjuEZDZ3AzzzC6Ob9crToiHszChXac8UODCYL394">💛 Quero Adotar</AdoptButton>
          </AdoptBox>
        </InfoSection>
      </Content>
    </Container>
  );
};

export default Pet;
