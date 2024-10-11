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
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

interface ConversationListProps {
  onSelectConversation: (id: string, name: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  onSelectConversation,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [conversations, setConversations] = useState<any[]>([]);
  const navigate = useNavigate(); // Hook para navegação

  const fetchProfilePic = async (contactId: string) => {
    try {
      const response = await axios.post(
        `https://stuxmessageserviceback-production.up.railway.app/client/getProfilePicUrl/comunidadezdg`,
        { contactId },
        { headers: { "x-api-key": "api_key" } }
      );
      return response.data.result || "https://via.placeholder.com/40";
    } catch (error) {
      console.error(`Erro ao buscar foto de perfil de ${contactId}:`, error);
      return "https://via.placeholder.com/40";
    }
  };

  const fetchConversations = async () => {
    try {
      const response = await axios.get(
        "https://stuxmessageserviceback-production.up.railway.app/client/getChats/comunidadezdg",
        { headers: { "x-api-key": "api_key" } }
      );
      const data = response.data;

      if (data.success) {
        const formattedConversations = await Promise.all(
          data.chats.map(async (chat: any) => {
            const profilePicUrl = await fetchProfilePic(chat.id._serialized);
            return {
              id: chat.id._serialized,
              name: chat.name || chat.id.user,
              lastMessage: chat.lastMessage.body,
              time: new Date(
                chat.lastMessage.timestamp * 1000
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              avatar: profilePicUrl,
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
    fetchConversations();
  }, []);

  const handleConversationClick = (
    conversationId: string,
    contactName: string
  ) => {
    onSelectConversation(conversationId, contactName); // Atualiza o estado
    navigate(`/chat/${conversationId}`); // Navega para o novo chat
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ConversationListContainer>
      <Title>Contatos</Title>
      <SearchBarContainer>
        <SearchIcon />
        <SearchBar
          type="text"
          placeholder="Pesquisar conversas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBarContainer>

      {filteredConversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          onClick={() =>
            handleConversationClick(conversation.id, conversation.name)
          } // Chama a navegação e seleção de chat
        >
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
