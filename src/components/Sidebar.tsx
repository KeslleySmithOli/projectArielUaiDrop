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
import { Container, Typography, Switch, FormControlLabel } from "@mui/material";

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <SidebarContainer>
      <Link to="/Contact" style={{ textDecoration: "none" }}>
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
          <ChatIcon sx={{ color: "#00a100" }} />
        </Badge>
      </StyledIconButton>

      <Divider />

      <Spacer />

      <StyledIconButton>
        <Link to="/qr-code" style={{ textDecoration: "none" }}>
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

      <Link to="/settings" style={{ textDecoration: "none" }}>
        <StyledIconButton aria-label="Settings">
          <TuneIcon />
        </StyledIconButton>
      </Link>

      <StyledIconButton aria-label="Modo Escuro">
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleToggle} />}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#00a100", // Cor do botão quando ativo
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#00a100", // Cor da trilha quando ativo
            },
            marginLeft: 2
          }}
          label=""
        />
      </StyledIconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
