import React, { useState, useEffect, useRef } from "react";
import {
  ChatWindowContainer,
  MessageArea,
  InputArea,
  IconButton,
  Input,
  ConversationContainer,
  MessageBubble,
  Avatar,
  MessageContent,
  UserName,
  MessageText,
  MessageTime,
} from "src/styles/ChatWindowStyles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useParams } from "react-router-dom"; // Para pegar o chatId

type Message = {
  id: string;
  name: string;
  text: string;
  time: string;
  avatar: string;
  fromMe: boolean;
};

const ChatWindow: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>(); // Pega o chatId da URL
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({}); // Mensagens separadas por chatId
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<
    number | null
  >(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Função para fazer scroll até o final
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  // Função para buscar mensagens
  const fetchMessages = async () => {
    if (!chatId) return; // Verifica se o chatId está definido

    try {
      const response = await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/chat/fetchMessages/comunidadezdg",
        {
          chatId, // Usa o chatId da URL para buscar mensagens dessa conversa
          searchOptions: lastMessageTimestamp
            ? { timestamp: lastMessageTimestamp }
            : {},
        },
        {
          headers: {
            "x-api-key": "api_key",
          },
        }
      );

      const newMessages = response.data.messages;

      // Filtrar mensagens duplicadas e mapear as novas
      const filteredMessages = newMessages
        .filter(
          (msg: any) =>
            msg.body &&
            !messages[chatId]?.find((m) => m.id === msg.id._serialized)
        )
        .map((msg: any) => ({
          id: msg.id._serialized,
          name: msg.from,
          text: msg.body,
          time: new Date(msg.timestamp * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: "https://via.placeholder.com/40",
          fromMe: msg.fromMe,
        }));

      // Adicionar as novas mensagens ao estado da conversa específica (por chatId)
      if (filteredMessages.length > 0) {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [chatId]: [...(prevMessages[chatId] || []), ...filteredMessages],
        }));

        setLastMessageTimestamp(newMessages[newMessages.length - 1].timestamp);
      }
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  useEffect(() => {
    if (chatId) {
      fetchMessages();
    }
  }, [chatId]); // Recarrega mensagens quando o chatId mudar

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatId) {
        fetchMessages();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [lastMessageTimestamp, chatId]);

  useEffect(() => {
    if (chatId && messages[chatId]) {
      scrollToBottom();
    }
  }, [chatId, messages]); // Faz o scroll para o final sempre que novas mensagens chegarem

  // Função para enviar mensagem
  const handleSendMessage = async () => {
    if (!message || !chatId) return;

    try {
      await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/client/sendMessage/comunidadezdg",
        {
          chatId,
          contentType: "string",
          content: message,
        },
        {
          headers: {
            "x-api-key": "api_key",
          },
        }
      );

      // Adiciona a mensagem enviada localmente ao estado
      const newMessage = {
        id: `${Date.now()}`,
        name: "Você",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "https://via.placeholder.com/40",
        fromMe: true,
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...(prevMessages[chatId] || []), newMessage],
      }));

      setMessage(""); // Limpa o campo de entrada após o envio
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <ChatWindowContainer>
      <MessageArea>
        <ConversationContainer>
          {chatId && messages[chatId] && messages[chatId].length > 0 ? ( // Verifica se existem mensagens para o chatId
            messages[chatId].map((message: Message, index: number) => (
              <MessageBubble
                key={message.id}
                ref={
                  index === messages[chatId].length - 1 ? lastMessageRef : null
                }
                style={{
                  alignSelf:
                    message.fromMe === true ? "flex-end" : "flex-start",
                  backgroundColor: message.fromMe === true ? "#dcf8c6" : "#fff",
                }}
              >
                <Avatar src={message.avatar} alt={message.name} />
                <MessageContent>
                  <UserName>
                    {message.fromMe === true ? "Você" : message.name}
                  </UserName>
                  <MessageText>{message.text}</MessageText>
                  <MessageTime>{message.time}</MessageTime>
                </MessageContent>
              </MessageBubble>
            ))
          ) : (
            <div>Nenhuma mensagem ainda</div> // Mensagem de fallback quando não há mensagens
          )}
        </ConversationContainer>
      </MessageArea>

      <InputArea>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <Input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </InputArea>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
