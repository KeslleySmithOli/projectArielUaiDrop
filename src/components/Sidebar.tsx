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
import FlowChartIcon from "@mui/icons-material/ShowChart";
import { Link } from "react-router-dom";
import QrCodeIcon from "@mui/icons-material/QrCode";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Link to="/Contact" style={{ textDecoration: "none" }}>
        {" "}
        {/* Link para a página de contatos */}
        <StyledIconButton
          aria-label="Contatos"
          sx={{
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
            "&:focus": { boxShadow: "none" },
          }}
        >
          <ContactsIcon sx={{ color: "#000092" }} />
        </StyledIconButton>
      </Link>

      <StyledIconButton aria-label="Ver Conversas">
        <Badge badgeContent={6} color="error">
          <ChatIcon sx={{ color: "#00a100" }}></ChatIcon>
        </Badge>
      </StyledIconButton>

      <Divider />

      <Spacer></Spacer>

      <StyledIconButton>
        <Link to="/qr-code" style={{ textDecoration: "none" }}>
          {" "}
          {/* Link para o QR Code */}
          <StyledIconButton aria-label="Ler QR Code">
            <QrCodeIcon sx={{ color: "#000092" }} />
          </StyledIconButton>
        </Link>
      </StyledIconButton>

      <StyledIconButton>
        <Link to="/flows" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#00000" }}>
            <FlowChartIcon />
          </IconButton>
        </Link>
      </StyledIconButton>

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
