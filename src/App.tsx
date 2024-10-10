import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Sidebar from './components/Sidebar'; 
import ConversationList from './components/ConversationList'; 
import ChatWindow from './components/ChatWindow'; 
import FlowEditor from './pages/FlowEditor';
import GlobalStyle from './styles/GlobalStyle';
import Contacts from './components/Contact'; // Certifique-se de que o caminho está correto
import 'emoji-mart/css/emoji-mart.css';

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
        
        {/* Rota para a tela de chat */}
        <Route path="/chat" element={
          <AppContainer>
            <Sidebar />
            <ConversationList />
            <ChatWindow />
          </AppContainer>
        } />

        {/* Rota para a tela de contatos */}
        <Route path="/contacts" element={
          <AppContainer>
            <Sidebar />
            <Contacts /> {/* Aqui você renderiza o componente de contatos */}
          </AppContainer>
        } />
      </Routes>
    </Router>
  );
};

export default App;
