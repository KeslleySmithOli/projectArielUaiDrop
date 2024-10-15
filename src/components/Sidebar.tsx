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
import { Link, useNavigate } from "react-router-dom";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { FormControlLabel, Switch } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const navigate = useNavigate(); // Hook para navegação

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <SidebarContainer>
      <Link to="/contacts" style={{ textDecoration: "none" }}>
        <StyledIconButton aria-label="Contatos">
          <ContactsIcon sx={{ color: "#000092" }} />
        </StyledIconButton>
      </Link>

      {/* Botão para Navegar para a tela de Conversas */}
      <StyledIconButton
        aria-label="Ver Conversas"
        onClick={() => navigate("/chat")} // Redireciona para /chat
      >
        <Badge badgeContent={6} color="error">
          <ChatIcon sx={{ color: "#00a100" }} />
        </Badge>
      </StyledIconButton>

      <Divider />
      <Spacer />

      <Link to="/qr-code" style={{ textDecoration: "none" }}>
        <StyledIconButton aria-label="Ler QR Code">
          <QrCodeIcon sx={{ color: "#000092" }} />
        </StyledIconButton>
      </Link>

      <Link to="/flows" style={{ textDecoration: "none" }}>
        <StyledIconButton aria-label="Flows">
          <RateReviewIcon />
        </StyledIconButton>
      </Link>

      <Link to="/settings" style={{ textDecoration: "none" }}>
        <StyledIconButton aria-label="Settings">
          <TuneIcon />
        </StyledIconButton>
      </Link>

      <StyledIconButton aria-label="Modo Escuro">
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleToggle}
              sx={{
                "&:hover": {
                  boxShadow: "none", // Remove a sombra ao passar o mouse
                  backgroundColor: "transparent", // Garante que não tenha fundo
                },
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#00a100", // Cor do botão quando ativo
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#00a100", // Cor da trilha quando ativo
                },
              }}
            />
          }
          sx={{
            marginLeft: 2, // Ajuste de margem para o FormControlLabel
            "&:hover": {
              boxShadow: "none", // Remove sombra no hover
            },
          }}
          label=""
        />
      </StyledIconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
