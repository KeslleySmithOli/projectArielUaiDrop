// Dentro do App.tsx ou em um arquivo próprio (como MainLayout.tsx)

import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

// Interface definida no mesmo arquivo
interface MainLayoutProps {
  children: ReactNode;
}

// Componente MainLayout utilizando a interface
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <AppContainer>
    <Sidebar />
    <ContentContainer>{children}</ContentContainer>
  </AppContainer>
);

export default MainLayout;
