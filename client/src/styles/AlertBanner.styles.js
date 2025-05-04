import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(-100%)
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: #e63946;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  padding: 0 1rem;
`;

export const Icon = styled.div`
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  z-index: 1;
`;

export const Marquee = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

export const Message = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const ReportButton = styled.button`
  margin-left: 1rem;
  padding: 0.4rem 1rem;
  border: 2px solid white;
  border-radius: 20px;
  background-color: white;
  color: #e63946;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 1;

  &:hover {
    background-color: #f8d7da;
  }

  @media (max-width: 480px) {
    display: none; /* esconde em telas muito pequenas, se necessário */
  }
`;
