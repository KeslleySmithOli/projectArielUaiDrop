import React, { useState, useEffect } from "react";
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
  Time,
} from "src/styles/ConversationStyles";
import { Link } from "react-router-dom";
import axios from "axios";

const ConversationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [conversations, setConversations] = useState<any[]>([]);

  // Função para buscar a imagem de perfil de cada contato
  const fetchProfilePic = async (contactId: string) => {
    try {
      const response = await axios.post(
        `https://stuxmessageserviceback-production.up.railway.app/client/getProfilePicUrl/comunidadezdg`,
        {
          contactId,
        },
        {
          headers: {
            "x-api-key": "api_key", // Use a chave de API correta
          },
        }
      );

      // A URL da imagem de perfil está no campo 'result'
      return response.data.result || "https://via.placeholder.com/40"; // Retorna a URL da imagem de perfil ou um placeholder
    } catch (error) {
      console.error(`Erro ao buscar foto de perfil de ${contactId}:`, error);
      return "https://via.placeholder.com/40"; // Retorna um placeholder em caso de erro
    }
  };

  // Função para buscar as conversas da API
  const fetchConversations = async () => {
    try {
      const response = await axios.get(
        "https://stuxmessageserviceback-production.up.railway.app/client/getChats/comunidadezdg",
        {
          headers: {
            "x-api-key": "api_key",
          },
        }
      );
      const data = response.data;

      if (data.success) {
        const formattedConversations = await Promise.all(
          data.chats.map(async (chat: any) => {
            const profilePicUrl = await fetchProfilePic(chat.id._serialized); // Busca a foto de perfil
            return {
              id: chat.id._serialized,
              name: chat.name || chat.id.user,
              lastMessage: chat.lastMessage.body,
              time: new Date(
                chat.lastMessage.timestamp * 1000
              ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              avatar: profilePicUrl, // Adiciona a URL da foto de perfil
            };
          })
        );
        setConversations(formattedConversations);
      }
    } catch (error) {
      console.error("Erro ao buscar as conversas:", error);
    }
  };

  useEffect(() => {
    fetchConversations(); // Busca as conversas ao carregar o componente
  }, []);

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ConversationListContainer>
      <Title>Contatos</Title>

      {/* Barra de pesquisa */}
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
      {filteredConversations.map((conversation) => (
        <Link
          to={`/chat/${conversation.id}`} // Navega para o chat
          key={conversation.id}
          style={{ textDecoration: "none", color: "inherit" }} // Remove a decoração de link
        >
          <ConversationItem>
            <Avatar src={conversation.avatar} alt={conversation.name} />
            <ConversationDetails>
              <ConversationName>{conversation.name}</ConversationName>
              <LastMessage>{conversation.lastMessage}</LastMessage>
            </ConversationDetails>
            <Time>{conversation.time}</Time>
          </ConversationItem>
        </Link>
      ))}
    </ConversationListContainer>
  );
};

export default ConversationList;
