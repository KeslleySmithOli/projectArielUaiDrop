import React, { useState } from "react";
import { Button, TextField, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

// Container para o layout da página
const FlowEditorContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// Área de configuração do editor de mensagens
const EditorArea = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// Caixa de lista de mensagens configuradas
const MessageList = styled(List)`
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
`;

const FlowEditor: React.FC = () => {
  const [messageText, setMessageText] = useState(""); // Estado para o campo de texto da mensagem
  const [messages, setMessages] = useState<string[]>([]); // Estado para armazenar mensagens do bot
  const [editIndex, setEditIndex] = useState<number | null>(null); // Estado para controlar o índice de edição

  // Adiciona ou edita uma mensagem no estado
  const handleAddMessage = () => {
    if (editIndex !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editIndex] = messageText;
      setMessages(updatedMessages);
      setEditIndex(null);
    } else {
      setMessages((prevMessages) => [...prevMessages, messageText]);
    }
    setMessageText(""); // Limpa o campo de texto após adicionar/editar
  };

  // Remove uma mensagem da lista
  const handleDeleteMessage = (index: number) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  // Prepara uma mensagem para edição
  const handleEditMessage = (index: number) => {
    setMessageText(messages[index]);
    setEditIndex(index);
  };

  return (
    <FlowEditorContainer>
      {/* Mantém o Sidebar */}
      <Sidebar />

      {/* Área do editor de mensagens */}
      <EditorArea>
        <Typography variant="h4">Configurar Mensagens do Bot</Typography>
        <TextField
          label="Digite a mensagem do bot"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddMessage}>
          {editIndex !== null ? "Editar Mensagem" : "Adicionar Mensagem"}
        </Button>

        {/* Lista de mensagens configuradas */}
        <MessageList>
          {messages.map((message, index) => (
            <ListItem key={index} style={{ backgroundColor: "#f9f9f9", margin: "5px 0" }}>
              <ListItemText primary={message} />
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditMessage(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMessage(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </MessageList>
      </EditorArea>
    </FlowEditorContainer>
  );
};

export default FlowEditor;
