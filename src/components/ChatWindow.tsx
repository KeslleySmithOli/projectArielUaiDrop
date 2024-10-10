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

const ChatWindow: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: string; name: string; text: string; time: string; avatar: string }[]
  >([]);
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<
    number | null
  >(null);

  // Ref para o último item da conversa
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Função para fazer scroll automático para o último item
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  // Função para buscar novas mensagens
  const fetchMessages = async () => {
    try {
      const response = await axios.post(
        "https://stuxmessageserviceback-production.up.railway.app/chat/fetchMessages/comunidadezdg",
        {
          chatId: "553191852156@c.us",
          searchOptions: lastMessageTimestamp
            ? { timestamp: lastMessageTimestamp } // Busca apenas mensagens novas
            : {},
        },
        {
          headers: {
            "x-api-key": "api_key",
          },
        }
      );

      const newMessages = response.data.messages;

      // Filtra mensagens para remover as que já foram adicionadas e as vazias
      const filteredMessages = newMessages
        .filter(
          (msg: { body: string; id: { _serialized: string } }) =>
            msg.body &&
            msg.body.trim() !== "" &&
            !messages.find((m) => m.id === msg.id._serialized)
        )
        .map(
          (msg: {
            id: { _serialized: string };
            from: any;
            body: any;
            timestamp: number;
          }) => ({
            id: msg.id._serialized, // ID único baseado no _serialized
            name: msg.from, // Nome do remetente
            text: msg.body, // Texto da mensagem
            time: new Date(msg.timestamp * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            avatar: "https://via.placeholder.com/40", // Avatar fictício
          })
        );

      // Adiciona as novas mensagens ao estado
      if (filteredMessages.length > 0) {
        setMessages((prevMessages) => [...prevMessages, ...filteredMessages]);

        // Atualiza o timestamp da última mensagem
        setLastMessageTimestamp(newMessages[newMessages.length - 1].timestamp);
      }
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  // Efeito para carregar o histórico de mensagens quando a tela é aberta
  useEffect(() => {
    fetchMessages(); // Carrega as mensagens quando o componente é montado
  }, []); // Executa apenas uma vez ao montar o componente

  // Efeito para buscar novas mensagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [lastMessageTimestamp]); // Roda quando o timestamp é atualizado

  // Efeito para fazer scroll automático para o final ao carregar mensagens
  useEffect(() => {
    scrollToBottom(); // Scroll para o final sempre que novas mensagens chegarem
  }, [messages]); // Sempre que o array de mensagens mudar, o scroll será executado

  // Função para enviar uma nova mensagem
  const handleSendMessage = async () => {
    if (!message) return;

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

    // Adiciona a mensagem enviada localmente
    // setMessages((prevMessages) => [...prevMessages, newUserMessage]);

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
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      // Exibe uma mensagem de erro
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: `${messages.length + 2}`,
          name: "Bot",
          text: "Erro ao se comunicar com o servidor",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: "https://via.placeholder.com/40",
        },
      ]);
    }

    setMessage(""); // Limpa o campo de entrada após o envio
  };

  return (
    <ChatWindowContainer>
      <MessageArea>
        <ConversationContainer>
          {messages.map((message, index) => (
            <MessageBubble
              key={message.id}
              ref={index === messages.length - 1 ? lastMessageRef : null} // Ref na última mensagem
              style={{
                alignSelf: message.name === "Você" ? "flex-end" : "flex-start", // Alinha à direita se for você
                backgroundColor: message.name === "Você" ? "#dcf8c6" : "#fff", // Estilo diferente para suas mensagens
              }}
            >
              <Avatar src={message.avatar} alt={message.name} />
              <MessageContent>
                <UserName>{message.name}</UserName>
                <MessageText>{message.text}</MessageText>
                <MessageTime>{message.time}</MessageTime>
              </MessageContent>
            </MessageBubble>
          ))}
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
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setMessage(e.target.value)
          }
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </InputArea>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
