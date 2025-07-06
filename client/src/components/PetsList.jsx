import React from 'react';
import {
  Section,
  SectionTitle,
  PetsGrid,
  PetCard,
  PetImage,
  PetInfo,
  PetName,
  PetDetails,
  PetTraits,
  AdoptButton
} from '../styles/PetsList.styles';

import lunaImg from '../assets/luna.jpeg';
import maxImg from '../assets/max.jpeg';
import thorImg from '../assets/thor.jpeg';

const pets = [
  {
    name: 'Luna',
    age: '2 anos',
    breed: 'Golden Retriever',
    traits: 'Dócil e Brincalhona',
    image: lunaImg,
    icon: '❤️',
  },
  {
    name: 'Max',
    age: '1 ano',
    breed: 'Border Collie',
    traits: 'Energético e Inteligente',
    image: maxImg,
    icon: '⚡',
  },
  {
    name: 'Thor',
    age: '6 meses',
    breed: 'Labrador',
    traits: 'Carinhoso e Calmo',
    image: thorImg,
    icon: '⭐',
  },
];

const PetsList = () => {
  return (
    <Section>
      <SectionTitle>Pets Disponíveis para Adoção</SectionTitle>
      <PetsGrid>
        {pets.map((pet, index) => (
          <PetCard key={index}>
            <PetImage src={pet.image} alt={pet.name} />
            <PetInfo>
              <PetName>{pet.name}</PetName>
              <PetDetails>{pet.age} • {pet.breed}</PetDetails>
              <PetTraits>{pet.icon} {pet.traits}</PetTraits>
              <AdoptButton target="_blank" href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdSci6Hras_nxwBDkXJ2RIhNIQKSnLREJbZIzEpBLjIHdtqpg%2Fviewform%3Fusp%3Dsharing%26fbclid%3DPAZXh0bgNhZW0CMTEAAadxtX7GZVoqhDwQ397I1qd0694OTHnIzes42iqFOoNNJfxC--VHCl9ER7fElQ_aem_pjKjt6CpuDE_lPUwKlHxPw&e=AT1z_O0fOUEElyr5M2wZCY6Fzk2bIaDtbxRJoS1rGadGHdm0SoVxra4M-nb9IIykjuEZDZ3AzzzC6Ob9crToiHszChXac8UODCYL394">Quero Adotar</AdoptButton>
            </PetInfo>
          </PetCard>
        ))}
      </PetsGrid>
    </Section>
  );
};

export default PetsList;
