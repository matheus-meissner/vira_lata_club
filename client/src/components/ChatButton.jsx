import React, { useState } from 'react';
import dogbot from '../assets/dogbot.png'; // Importar o ícone do chat
import {
  FloatingButton,
  ChatContainer,
  ChatHeader,
  ChatBody,
  ChatInputArea,
  ChatInput,
  SendButton,
  MessageBubble,
  Avatar,
  Bubble
} from '../styles/ChatButton.styles';

import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const enviarMensagemParaBot = async (mensagemUsuario) => {
  try {
    const response = await fetch('http://localhost:5000/bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mensagem: mensagemUsuario }),
    });

    const data = await response.json();
    return data.resposta;
  } catch (error) {
    console.error('Erro ao falar com o bot:', error);
    return 'Ops! O Caramelo teve um probleminha para responder 🐶💤';
  }
};

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [mensagens, setMensagens] = useState([
    {
      autor: 'bot',
      texto: 'Olá! Sou o Caramelo e estou aqui pra te ajudar. Me conta, como seria o amigo ideal pra você?',
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Adiciona mensagem do usuário
    setMensagens((prev) => [...prev, { autor: 'usuario', texto: message }]);

    // Envia pro backend
    const resposta = await enviarMensagemParaBot(message);

    // Adiciona resposta do bot
    setMensagens((prev) => [...prev, { autor: 'bot', texto: resposta }]);

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
            {mensagens.map((msg, index) => (
              <MessageBubble key={index} isUser={msg.autor === 'usuario'}>
                {msg.autor === 'bot' && <Avatar src={dogbot} alt="Dogbot" />}
                <Bubble>
                  {msg.autor === 'bot' && <strong>Caramelo:</strong>}
                  <br />
                  {msg.texto}
                </Bubble>
              </MessageBubble>
            ))}
          </ChatBody>

          <ChatInputArea>
            <ChatInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <SendButton onClick={handleSend}>
              <FaPaperPlane />
            </SendButton>
          </ChatInputArea>
        </ChatContainer>
      )}

      <FloatingButton onClick={() => setIsOpen(!isOpen)}>
        <img src={dogbot} alt="Botão do Caramelo" />
      </FloatingButton>
    </>
  );
};

export default ChatButton;
