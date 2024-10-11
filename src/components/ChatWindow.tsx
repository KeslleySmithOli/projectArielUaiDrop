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

interface Message {
  id: string;
  name: string;
  text: string;
  time: string;
  avatar: string;
  fromMe: boolean;
}

interface Props {
  chatId: string;
  contactName: string;
  myPhoneNumber: string;
}

const ChatWindow: React.FC<Props> = ({
  chatId,
  contactName,
  myPhoneNumber,
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<
    null | number
  >(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const myProfilePicUrl = useRef<string>("https://via.placeholder.com/40");

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const fetchProfilePic = async (contactId: string): Promise<string> => {
    try {
      const response = await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/client/getProfilePicUrl/comunidadezdg",
        { contactId },
        { headers: { "x-api-key": "api_key" } }
      );
      return response.data.success
        ? response.data.result
        : "https://via.placeholder.com/40";
    } catch (error) {
      console.error("Erro ao buscar a foto do perfil:", error);
      return "https://via.placeholder.com/40";
    }
  };

  const fetchMyProfilePic = async () => {
    myProfilePicUrl.current = await fetchProfilePic(myPhoneNumber);
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/chat/fetchMessages/comunidadezdg",
        {
          chatId,
          searchOptions: lastMessageTimestamp
            ? { timestamp: lastMessageTimestamp }
            : {},
        },
        { headers: { "x-api-key": "api_key" } }
      );

      const newMessages = response.data.messages;

      const filteredMessages = await Promise.all(
        newMessages
          .filter(
            (msg: any) =>
              msg.body && !messages.find((m) => m.id === msg.id._serialized)
          )
          .map(async (msg: any) => ({
            id: msg.id._serialized,
            name: msg.fromMe ? "Você" : contactName,
            text: msg.body,
            time: new Date(msg.timestamp * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            avatar: msg.fromMe
              ? myProfilePicUrl.current
              : await fetchProfilePic(msg.id.remote),
            fromMe: msg.fromMe,
          }))
      );

      if (filteredMessages.length > 0) {
        setMessages((prevMessages) => [...prevMessages, ...filteredMessages]);
        setLastMessageTimestamp(newMessages[newMessages.length - 1].timestamp);
      }
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  useEffect(() => {
    setMessages([]);
    setLastMessageTimestamp(null);
    fetchMyProfilePic();
    fetchMessages();
  }, [chatId]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000);
    return () => clearInterval(interval);
  }, [lastMessageTimestamp]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (
    e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent
  ) => {
    if (!message || !chatId) return;

    if ("key" in e && e.key !== "Enter") return;

    try {
      await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/client/sendMessage/comunidadezdg",
        { chatId, contentType: "string", content: message },
        { headers: { "x-api-key": "api_key" } }
      );

      const newMessage: Message = {
        id: `${Date.now()}`,
        name: "Você",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: myProfilePicUrl.current,
        fromMe: true,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setMessage(""); // Limpa o campo de entrada após o envio
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <ChatWindowContainer>
      <MessageArea>
        <ConversationContainer>
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <MessageBubble
                key={message.id}
                ref={index === messages.length - 1 ? lastMessageRef : null}
                style={{
                  alignSelf: message.fromMe ? "flex-end" : "flex-start",
                  backgroundColor: message.fromMe ? "#dcf8c6" : "#fff",
                }}
              >
                <Avatar src={message.avatar} alt={message.name} />
                <MessageContent>
                  <UserName>{message.fromMe ? "Você" : message.name}</UserName>{" "}
                  {/* Nome do remetente */}
                  <MessageText>{message.text}</MessageText>
                  <MessageTime>{message.time}</MessageTime>
                </MessageContent>
              </MessageBubble>
            ))
          ) : (
            <div>Nenhuma mensagem ainda</div>
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
          onKeyDown={handleSendMessage}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </InputArea>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
