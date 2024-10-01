import React from 'react';
import { ChatWindowContainer , MessageArea , InputArea} from 'src/styles/ChatWindowStyles';


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
