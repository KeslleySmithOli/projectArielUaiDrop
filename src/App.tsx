import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import ConversationList from "./components/ConversationList";
import ChatWindow from "./components/ChatWindow";
import FlowEditor from "./pages/FlowEditor";
import GlobalStyle from "./styles/GlobalStyle";
import Contacts from "./components/Contacts"; // Certifique-se de que o caminho está correto

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// Componente intermediário para capturar o chatId da URL e passar para o ChatWindow
const ChatPage: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const [selectedContactName, setSelectedContactName] = useState<string>("");

  // Função para lidar com a seleção de conversas na ConversationList
  const handleSelectConversation = (id: string, name: string) => {
    setSelectedContactName(name);
    // Navega para a URL da conversa selecionada (outra forma de navegação programática pode ser implementada)
  };

  return (
    <AppContainer>
      <Sidebar />
      <ConversationList onSelectConversation={handleSelectConversation} />
      {/* Passa o chatId e contactName como props para o ChatWindow */}
      {chatId && (
        <ChatWindow
          chatId={chatId}
          contactName={selectedContactName}
          myPhoneNumber="554797054058@c.us" // Altere para o número real do usuário
        />
      )}
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flows" element={<FlowEditor />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route
          path="/contacts"
          element={
            <AppContainer>
              <Sidebar />
              <Contacts /> {/* Aqui você renderiza o componente de contatos */}
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
