import styled from 'styled-components';


export const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MessageArea = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  overflow-y: auto;
`;

export const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-radius: 20px;  // Bordas mais arredondadas
  background-color: #f9f9f9;
  padding: 5px;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);  // Sombra mais suave
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  background-color: transparent;  // Fundo transparente para integrar com a área
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #757575;  // Ícones cinza médio

  &:hover {
    color: #000;  // Escurece ao passar o mouse
  }
`;

export const ConversationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;  // Permite rolagem vertical
  background-color: #f9f9f9;
`;

export const MessageBubble = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;  // Espaçamento entre mensagens
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;  // Espaço entre avatar e mensagem
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;  // Espaço entre nome e mensagem
`;

export const MessageText = styled.span`
  background-color: #ffffff;  // Fundo branco para a mensagem
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);  // Sombra leve
`;

export const MessageTime = styled.span`
  font-size: 0.8rem;
  color: #999;  // Cor mais clara para o horário
  margin-top: 5px;  // Espaço entre a mensagem e o horário
`;