import React from "react";
import { IconButton, Badge } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  SidebarContainer,
  Spacer,
  StyledIconButton,
  Divider,
} from "../styles/SidebarStyles";
import TuneIcon from "@mui/icons-material/Tune";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <StyledIconButton aria-label="Contatos"sx={{ 
    boxShadow: 'none', 
    '&:hover': { boxShadow: 'none' }, 
    '&:focus': { boxShadow: 'none' } 
  }}>
        <ContactsIcon sx={{ color: "#000092" }} />
      </StyledIconButton>

      <StyledIconButton aria-label="Ver Conversas">
        <Badge badgeContent={6} color="error">
        <ChatIcon sx={{ color: "#00a100" }}></ChatIcon>
        </Badge>
      </StyledIconButton>

      <Divider/>

      <Spacer></Spacer>

      <StyledIconButton aria-label="Settings">
        <TuneIcon />
      </StyledIconButton>

      <StyledIconButton aria-label="Settings">
        <ToggleOnIcon fontSize="large" sx={{ color: "#00a100" }} />
      </StyledIconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
