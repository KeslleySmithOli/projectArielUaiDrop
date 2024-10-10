import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login"; // Certifique-se de que Login está sendo exportado corretamente
import Sidebar from "./components/Sidebar"; // Verifique se Sidebar tem export default
import ConversationList from "./components/ConversationList"; // Verifique se ConversationList tem export default
import ChatWindow from "./components/ChatWindow"; // Verifique se ChatWindow tem export default
import FlowEditor from "./pages/FlowEditor"; // Verifique se FlowEditor tem export default
import GlobalStyle from "./styles/GlobalStyle"; // Verifique se GlobalStyle tem export default
import Contacts from "./components/Contact"; // Verifique o nome correto e se está exportando

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flows" element={<FlowEditor />} />

        {/* Rota para a lista de conversas */}
        <Route
          path="/chat"
          element={
            <AppContainer>
              <Sidebar />
              <ConversationList />
            </AppContainer>
          }
        />

        {/* Rota para o chat com um chatId */}
        <Route
          path="/chat/:chatId"
          element={
            <AppContainer>
              <Sidebar />
              <ConversationList />
              <ChatWindow />
            </AppContainer>
          }
        />

        {/* Rota para a tela de contatos */}
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
