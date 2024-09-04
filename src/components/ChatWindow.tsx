import React from 'react';
import styled from 'styled-components';

const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MessageArea = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  overflow-y: auto;
`;

const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const ChatWindow: React.FC = () => {
  return (
    <ChatWindowContainer>
      <MessageArea>
        <p>Mensagem de exemplo</p>
      </MessageArea>
      <InputArea>
        <input type="text" placeholder="Digite sua mensagem..." style={{ flex: 1 }} />
        <button>Enviar</button>
      </InputArea>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
