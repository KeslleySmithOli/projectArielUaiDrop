import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import '@fontsource/roboto/400.css';  // Peso normal
import '@fontsource/roboto/500.css';  // Peso médio
import '@fontsource/roboto/700.css';  // Peso negrito



export const ConversationListContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px; /* Ajuste a largura conforme necessário */
  padding: 1rem;
  max-height: 1300px;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif; 
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

// Container da barra de pesquisa
export const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  padding-left: 2.5rem;  /* Espaço para o ícone */
  border: 1px solid #f9f9f9;
  border-radius: 5px;  /* Bordas mais suaves */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;  /* Leve cor de fundo */
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;  /* Destaque ao focar */
    background-color: white;  /* Mudança de cor ao focar */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);  /* Sombra ao focar */
  }
`;

// Estilo do ícone de pesquisa
export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2rem;
`;

/** Container do corpo */
export const BodyContainer = styled.div`
  margin-top: -0.5rem;
  padding: 0.2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;  /* Reduzindo o tamanho da fonte */
`;

export const BoxContainer = styled.div`
  background-color: green; /* Fundo verde */
  padding: 0px; /* Espaçamento interno */
  border-radius: 0px; /* Bordas arredondadas */
  max-width: 6250px; /* Largura máxima da caixa */
  margin: 0 auto; /* Centraliza horizontalmente */
  text-align: center; /* Centraliza o texto dentro */
  color: white !important; /* Cor do texto */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConversationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #e6e6e6;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ConversationDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ConversationName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const LastMessage = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

export const Time = styled.span`
  font-size: 0.8rem;
  color: #999;
  align-self: flex-start;
`;