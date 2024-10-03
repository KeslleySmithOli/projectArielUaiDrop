import React, { useState } from 'react';
import {
  ConversationListContainer,
  Title,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
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
    name: 'Pavel Osipov',
    lastMessage: 'I want to get the discount price.',
    time: '15:05',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: 2,
    name: 'Helen Peters',
    lastMessage: 'Ok, thnx',
    time: '15:02',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: 3,
    name: 'Sarah Creed',
    lastMessage: 'Is it okay for you?',
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
      
      {/* Barra de pesquisa com ícone */}
      <SearchBarContainer>
        <SearchIcon />
        <SearchBar
          type="text"
          placeholder="Pesquisar conversas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBarContainer>

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
