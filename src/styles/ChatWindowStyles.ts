import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5; // Fundo mais claro para a janela de chat
`;

export const MessageArea = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  overflow-y: auto;
`;

export const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-radius: 20px;
  background-color: #ffffff; // Fundo branco para a área de entrada
  padding: 10px; // Espaçamento interno
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Sombra mais suave
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 20px; // Bordas arredondadas
  background-color: #f5f5f5; // Fundo cinza claro
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #757575;

  &:hover {
    color: #000;
  }
`;

export const ConversationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

export const MessageBubble = styled.div<{ sender: boolean }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  justify-content: ${({ sender }) => (sender ? "flex-end" : "flex-start")}; // Alinha a mensagem à direita ou esquerda
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333; // Cor mais escura para o nome
  margin-bottom: 4px;
`;

export const MessageText = styled.span<{ sender: boolean }>`
  background-color: ${({ sender }) => (sender ? "#dcf8c6" : "#fff")}; // Fundo verde para o usuário, branco para o bot
  padding: 10px;
  border-radius: 15px; // Bordas mais arredondadas
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Sombra leve
  max-width: 70%; // Largura máxima do balão
  word-wrap: break-word; // Quebra de palavras longas
`;

export const MessageTime = styled.span`
  font-size: 0.8rem;
  color: #999;
  margin-top: 5px;
`;
