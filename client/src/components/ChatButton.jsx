import React, { useState, useRef, useEffect } from 'react';
import dogbot from '../assets/dogbot.png';
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
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const apiUrl = import.meta.env.VITE_API_URL

const enviarMensagemParaBot = async (mensagemUsuario) => {
  try {
    const response = await fetch(`${apiUrl}/bot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensagem: mensagemUsuario })
    });

    const data = await response.json();
    return data.resposta;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return "Desculpe, o Caramelo está sem sinal de Wi-Fi no momento 🐶📡";
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
  const [esperandoResposta, setEsperandoResposta] = useState(false);
  const chatBodyRef = useRef(null);

  const handleSend = async () => {
    if (!message.trim() || esperandoResposta) return;

    const msgUsuario = { autor: 'usuario', texto: message };
    setMensagens((prev) => [...prev, msgUsuario]);
    setMessage('');
    setEsperandoResposta(true);

    const resposta = await enviarMensagemParaBot(message);

    const msgBot = { autor: 'bot', texto: resposta };
    setMensagens((prev) => [...prev, msgBot]);
    setEsperandoResposta(false);
  };

  // Scroll automático para última mensagem
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <>
      {isOpen && (
        <ChatContainer>
          <ChatHeader>
            Encontre um novo amigo!
            <FaTimes onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
          </ChatHeader>

          <ChatBody ref={chatBodyRef}>
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
            {esperandoResposta && (
              <MessageBubble isUser={false}>
                <Avatar src={dogbot} alt="Dogbot" />
                <Bubble>
                  <strong>Caramelo:</strong><br />
                  Pensando... 🐾
                </Bubble>
              </MessageBubble>
            )}
          </ChatBody>

          <ChatInputArea>
            <ChatInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={esperandoResposta}
            />
            <SendButton onClick={handleSend} disabled={esperandoResposta}>
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
