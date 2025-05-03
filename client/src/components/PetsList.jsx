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
              <AdoptButton href="#adotar">Quero Adotar</AdoptButton>
            </PetInfo>
          </PetCard>
        ))}
      </PetsGrid>
    </Section>
  );
};

export default PetsList;
