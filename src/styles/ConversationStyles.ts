import styled from 'styled-components';


export const ConversationListContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

/** Título*/
export const SectionTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  text-transform: uppercase;
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