import React from 'react';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import { SidebarContainer } from '../styles/SidebarStyles';




const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <IconButton aria-label="Contatos">
        <ContactsIcon />
      </IconButton>
      <IconButton aria-label="Ver Conversas">
        <ChatIcon />
      </IconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
