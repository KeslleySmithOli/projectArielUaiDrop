import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <button>Alterar Mensagens</button>
      <button>Ver Conversas</button>
    </SidebarContainer>
  );
};

export default Sidebar;
