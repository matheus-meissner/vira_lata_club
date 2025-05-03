import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #1a202c;
  margin-bottom: 3rem;
`;

export const TestimonialsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: left;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
`;

export const PetName = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #555;
`;

export const TestimonialText = styled.p`
  margin-top: 0.8rem;
  font-style: italic;
  font-size: 0.95rem;
  color: #444;
`;
