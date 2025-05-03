import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  background: #fdfdfd;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;

  span {
    color: #ff6600;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const ActionButton = styled.a`
  display: inline-block;
  background-color: #ff7a00;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #e86e00;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;
