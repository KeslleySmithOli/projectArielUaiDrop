import React from "react";
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

const messages = [
  {
    id: 1,
    name: "Pavel Osipov",
    text: "Hey there, I want to buy one of your amazing handmade items!",
    time: "15:05",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Elena Konstantinova",
    text: "Sure. You can choose one of three colors: purple, green, or cranberry red.",
    time: "15:06",
    avatar: "https://via.placeholder.com/40",
  },
  // Adicione mais mensagens conforme necessário
];

const ChatWindow: React.FC = () => {
  return (
    <ChatWindowContainer>
      <MessageArea>
        <ConversationContainer>
          {messages.map((message) => (
            <MessageBubble key={message.id}>
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
        <Input type="text" placeholder="Digite sua mensagem..." />
        <IconButton>
          <SendIcon />
        </IconButton>
      </InputArea>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
