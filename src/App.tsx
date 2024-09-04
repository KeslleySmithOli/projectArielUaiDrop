import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import ConversationList from './components/ConversationList';
import ChatWindow from './components/ChatWindow';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Sidebar />
      <ConversationList />
      <ChatWindow />
    </AppContainer>
  );
};

export default App;
