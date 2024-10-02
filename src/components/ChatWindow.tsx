import React from "react";
import {
  ChatWindowContainer,
  MessageArea,
  InputArea,
  IconButton,
  Input,
} from "src/styles/ChatWindowStyles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

const ChatWindow: React.FC = () => {
  return (
    <ChatWindowContainer>
      <MessageArea>
        <p>Mensagem de exemplo</p>
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
