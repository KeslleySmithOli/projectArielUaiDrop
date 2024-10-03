import React, { useState } from 'react';
import {
  ConversationListContainer,
  Title,
  SearchBar,
  ConversationItem,
  Avatar,
  ConversationDetails,
  ConversationName,
  LastMessage,
  Time
} from 'src/styles/ConversationStyles';

// Exemplo de dados de conversas
const conversations = [
  {
    id: 1,
    name: 'Keslley Smith',
    lastMessage: 'Eu quero saber o valor disso?',
    time: '15:05',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: 2,
    name: 'Guilherme Oliveira',
    lastMessage: 'Ok, até amanhã.',
    time: '15:02',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: 3,
    name: 'Ariel Saulo',
    lastMessage: 'Tudo bem?',
    time: '14:55',
    avatar: 'https://via.placeholder.com/40'
  },
];

const ConversationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar as conversas com base no termo de pesquisa
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ConversationListContainer>
      {/* Título */}
      <Title>Contatos</Title>
      
      {/* Barra de pesquisa */}
      <SearchBar
        type="text"
        placeholder="Pesquisar conversas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de conversas filtradas */}
      {filteredConversations.map(conversation => (
        <ConversationItem key={conversation.id}>
          <Avatar src={conversation.avatar} alt={conversation.name} />
          <ConversationDetails>
            <ConversationName>{conversation.name}</ConversationName>
            <LastMessage>{conversation.lastMessage}</LastMessage>
          </ConversationDetails>
          <Time>{conversation.time}</Time>
        </ConversationItem>
      ))}
    </ConversationListContainer>
  );
};

export default ConversationList;
