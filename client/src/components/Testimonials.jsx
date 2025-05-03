import React from 'react';
import {
  Section,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  Avatar,
  UserName,
  PetName,
  TestimonialText
} from '../styles/Testimonials.styles';

import anaAvatar from '../assets/ana_avatar.jpg'; // ajuste conforme a imagem
import pedroAvatar from '../assets/pedro_avatar.jpg'; // ajuste conforme a imagem

const testimonials = [
  {
    name: 'Ana Clara',
    pet: 'Luna',
    text: 'Adotar a Luna foi a melhor decisão que já tomamos. Ela trouxe tanta alegria para nossa família!',
    avatar: anaAvatar
  },
  {
    name: 'Pedro Santos',
    pet: 'Max',
    text: 'O processo de adoção foi simples e o suporte da equipe foi incrível. Max é parte da família agora!',
    avatar: pedroAvatar
  }
];

const Testimonials = () => {
  return (
    <Section>
      <SectionTitle>Histórias de amor que começaram aqui</SectionTitle>
      <TestimonialsGrid>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index}>
            <Avatar src={t.avatar} alt={t.name} />
            <UserName>{t.name}</UserName>
            <PetName>com {t.pet}</PetName>
            <TestimonialText>"{t.text}"</TestimonialText>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
};

export default Testimonials;
