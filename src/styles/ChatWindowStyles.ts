import styled from 'styled-components';


export const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// Área de mensagens com overflow para rolagem
export const MessageArea = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  overflow-y: auto;
`;

// Área de input com correção de sintaxe
export const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 10px;
  align-items: center; /* Centraliza os ícones verticalmente */
`;

// Input estilizado, agora com styled-components padrão
export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
`;

// Botão de ícone estilizado
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
`;