import styled from 'styled-components';


export const ConversationListContainer = styled.div`
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
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