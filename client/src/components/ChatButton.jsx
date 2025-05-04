import React, { useState } from 'react';
import {
  FloatingButton,
  ChatContainer,
  ChatHeader,
  ChatBody,
  ChatInputArea,
  ChatInput,
  SendButton
} from '../styles/ChatButton.styles';

import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert(`Mensagem enviada: ${message}`);
    setMessage('');
  };

  return (
    <>
      {isOpen && (
        <ChatContainer>
          <ChatHeader>
            Encontre um novo amigo!
            <FaTimes onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
          </ChatHeader>
          <ChatBody>
            <p>Olá! Sou o Caramelo e estou aqui pra te ajudar. Me conta, como seria o amigo ideal pra você?</p>
          </ChatBody>
          <ChatInputArea>
            <ChatInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton onClick={handleSend}>
              <FaPaperPlane />
            </SendButton>
          </ChatInputArea>
        </ChatContainer>
      )}

      <FloatingButton onClick={() => setIsOpen(!isOpen)}>
        <FaComments />
      </FloatingButton>
    </>
  );
};

export default ChatButton;
