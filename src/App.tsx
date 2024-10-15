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
import Contacts from "./components/Contacts";
import "emoji-mart/css/emoji-mart.css";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ChatPage: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const [selectedContactName, setSelectedContactName] = useState<string>("");

  const handleSelectConversation = (id: string, name: string) => {
    setSelectedContactName(name);
  };

  const myPhoneNumber = "your-phone-number"; // Defina seu número aqui

  return (
    <AppContainer>
      <Sidebar />
      <ConversationList onSelectConversation={handleSelectConversation} />
      {chatId ? (
        <ChatWindow
          chatId={chatId}
          contactName={selectedContactName}
          myPhoneNumber={myPhoneNumber}
        />
      ) : (
        <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
          Selecione uma conversa para começar o chat
        </div>
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
              <Contacts />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
