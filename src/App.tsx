import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login"; // Ajuste o caminho conforme necessário
import Sidebar from "./components/Sidebar"; // Mantém a sidebar
import ConversationList from "./components/ConversationList"; // Mantém a lista de conversas
import ChatWindow from "./components/ChatWindow"; // Mantém a janela de chat
import FlowEditor from "./pages/FlowEditor";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de login */}
        <Route path="/" element={<Login />} />
        <Route path="/flows" element={<FlowEditor />} />
        {/* Rota para a tela de chat */}
        <Route
          path="/chat"
          element={
            <AppContainer>
              <Sidebar />
              <ConversationList />
              <ChatWindow />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
