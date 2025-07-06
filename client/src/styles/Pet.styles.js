// src/styles/Pet.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from './theme';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ImageSection = styled.div`
  flex: 1;
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${theme.colors.primary};
`;

export const InfoSection = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
`;

export const SubInfo = styled.div`
  color: #666;
  margin-bottom: 1rem;
`;

export const Traits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Trait = styled.span`
  background-color: #f1f1f1;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.9rem;
`;

export const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const AdoptBox = styled.div`
  background-color: ${theme.colors.orange};
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;

  h3 {
    margin-top: 0;
  }

  p {
    margin: 0.5rem 0 1rem;
  }
`;

export const AdoptButton = styled.a`
  background-color: #fff;
  color: ${theme.colors.orange};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #ffe0cc;
  }
`;

export const ContactInfo = styled.div`
  background-color: #f8f8f8;
  padding: 1rem 1.5rem;
  border-radius: 12px;

  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
