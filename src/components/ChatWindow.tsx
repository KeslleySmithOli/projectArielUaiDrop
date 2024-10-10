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
import { Picker } from 'emoji-mart'; // Importando o Picker de emojis
import 'emoji-mart/css/emoji-mart.css';

const ChatWindow: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: string; name: string; text: string; time: string; avatar: string }[]
  >([]);
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<
    number | null
  >(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Estado para mostrar o seletor de emojis
  const [file, setFile] = useState<File | null>(null); // Estado para armazenar arquivos

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const fetchMessages = async () => {
    // ... (Seu código de busca de mensagens)
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000);
    return () => clearInterval(interval);
  }, [lastMessageTimestamp]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message && !file) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newUserMessage = {
      id: `${messages.length + 1}`, // ID temporário
      name: "Você", // Nome do remetente (você)
      text: message,
      time: currentTime,
      avatar: "https://via.placeholder.com/40",
    };

    try {
      await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/client/sendMessage/comunidadezdg",
        {
          chatId: "553191852156@c.us",
          contentType: "string",
          content: message,
        },
        {
          headers: {
            "x-api-key": "api_key",
          },
        }
      );
      // Se um arquivo for selecionado, você pode implementar o upload do arquivo aqui

    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setMessage(""); // Limpa o campo de entrada após o envio
    setFile(null); // Limpa o arquivo selecionado
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native); // Adiciona o emoji ao texto da mensagem
    setShowEmojiPicker(false); // Fecha o seletor de emojis
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage(selectedFile.name); // Define o nome do arquivo na caixa de mensagem
    }
  };

  return (
    <ChatWindowContainer>
      <MessageArea>
      <ConversationContainer>
  {messages.map((message, index) => (
    <MessageBubble
      key={message.id}
      sender={message.name === "Você"} // Passa a propriedade sender
      ref={index === messages.length - 1 ? lastMessageRef : null}
      style={{
        alignSelf: message.name === "Você" ? "flex-end" : "flex-start",
        backgroundColor: message.name === "Você" ? "#dcf8c6" : "#fff",
      }}
    >
      <Avatar src={message.avatar} alt={message.name} />
      <MessageContent>
        <UserName>{message.name}</UserName>
        <MessageText sender={message.name === "Você"}>{message.text}</MessageText>
        <MessageTime>{message.time}</MessageTime>
      </MessageContent>
    </MessageBubble>
  ))}
</ConversationContainer>
      </MessageArea>

      <InputArea>
        <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <EmojiEmotionsIcon />
        </IconButton>
        <input 
          type="file" 
          onChange={handleFileChange} 
          style={{ display: 'none' }} 
          id="file-upload" 
        />
        <label htmlFor="file-upload">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </label>
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

      {showEmojiPicker && (
        <div style={{ position: 'absolute', bottom: '60px', left: '20px' }}>
          <Picker onSelect={handleEmojiSelect} />
        </div>
      )}
    </ChatWindowContainer>
  );
};

export default ChatWindow;
