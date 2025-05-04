import styled from 'styled-components';
import { theme } from './theme';

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #e86e00;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  &:hover {
    background-color: #cf5d00;
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 130px; /* ajuste para ficar acima do botão */
  right: 24px;
  width: 360px;
  height: 500px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;


export const ChatHeader = styled.div`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatBody = styled.div`
  padding: 1rem;
  flex: 1;
  font-size: 0.95rem;
  color: #333;
  overflow-y: auto;
  background-color: #f9f9f9;

  p {
    margin-bottom: 0.75rem;
  }
`;

export const ChatInputArea = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #fff;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  font-size: 0.95rem;
  outline: none;
  background-color: transparent;
`;

export const SendButton = styled.button`
  background-color: #ff7a00;
  border: none;
  color: white;
  padding: 0.5rem 0.75rem;
  margin-left: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background-color: #e56700;
  }
`;

export const MessageBubble = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff7a00;
  object-fit: cover;
`;

export const Bubble = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  max-width: 75%;
  font-size: 0.95rem;
  color: #333;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  line-height: 1.4;
`;

