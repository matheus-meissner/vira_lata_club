import styled from 'styled-components';
import { theme } from './theme';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${theme.colors.primary};;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6600;

  .orange {
    color: #ff6600;
  }

  span:first-child {
    color: #000;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: #ff6600;
  }
`;

export const AdoptButton = styled.a`
  background-color: #ff6600;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background-color: #e65700;
  }
`;
