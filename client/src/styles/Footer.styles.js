import styled from 'styled-components';
import { theme } from './theme';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 3rem 2rem 2rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  flex: 1 1 250px;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #fff;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  span {
    color: #ff7a00;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkItem = styled.a`
  color: #cbd5e1;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: #ff7a00;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: #fff;
    font-size: 1.1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff7a00;
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NewsletterInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  font-size: 0.9rem;
  outline: none;
  width: 150px;
`;

export const NewsletterButton = styled.button`
  background-color: #ff7a00;
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #e56700;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #1c2e5a;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
`;
