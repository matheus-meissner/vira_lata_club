import styled from 'styled-components';
import { theme } from './theme';

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fdfdfd;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 3rem;
`;

export const PetsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const PetCard = styled.div`
  background-color: ${theme.colors.primary};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const PetImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const PetInfo = styled.div`
  padding: 1.2rem;
`;

export const PetName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
`;

export const PetDetails = styled.p`
  color: ${theme.colors.lightGray};
  font-size: 0.9rem;
  margin: 0.4rem 0;
`;

export const PetTraits = styled.p`
  color: ${theme.colors.orange};
  font-size: 0.95rem;
  font-weight: 500;
`;

export const AdoptButton = styled.a`
  display: block;
  margin-top: 1rem;
  background-color: #ff7a00;
  color: #fff;
  text-align: center;
  padding: 0.6rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: #e56700;
  }
`;