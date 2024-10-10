import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f2f5f9; // Fundo claro para toda a área de chat
`;

export const MessageArea = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  overflow-y: auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05); // Adiciona uma sombra mais suave
`;

export const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-radius: 30px;
  background-color: #fff;
  padding: 10px;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08); // Sombra leve para a área de input
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  background-color: transparent;
  color: #333;
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
    color: #1e88e5; // Azul ao passar o mouse para um efeito visual moderno
  }
`;

export const ConversationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`;

export const Avatar = styled.img<{ fromMe?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  display: ${({ fromMe }) =>
    fromMe
      ? "none"
      : "block"}; // Avatar visível apenas para mensagens recebidas
`;

export const MessageBubble = styled.div<{ fromMe?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ fromMe }) =>
    fromMe
      ? "flex-end"
      : "flex-start"}; // Alinhamento dependendo de quem enviou
  margin-bottom: 20px;
  max-width: 60%; // Max width para controlar o tamanho das mensagens
  align-self: ${({ fromMe }) =>
    fromMe
      ? "flex-end"
      : "flex-start"}; // Alinha à direita ou esquerda com base no remetente

  ${({ fromMe }) =>
    fromMe
      ? `
        background-color: #dcf8c6; // Fundo verde claro para mensagens enviadas
        border-radius: 16px 16px 0 16px; // Bordas arredondadas diferentes para mensagens enviadas
      `
      : `
        background-color: #ffffff; // Fundo branco para mensagens recebidas
        border-radius: 16px 16px 16px 0; // Bordas arredondadas diferentes para mensagens recebidas
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); // Sombra leve para mensagens recebidas
      `}

  padding: 10px 14px;
  box-shadow: ${({ fromMe }) =>
    fromMe
      ? "none"
      : "0 1px 5px rgba(0, 0, 0, 0.1)"}; // Sombra leve apenas para mensagens recebidas
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #444;
  margin-bottom: 4px;
`;

export const MessageText = styled.span`
  font-size: 15px;
  color: #333;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: #999;
  margin-top: 8px;
  align-self: flex-end;
`;
