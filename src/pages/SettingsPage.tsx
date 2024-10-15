// src/pages/SettingsPage.tsx

import React, { useState } from "react";
import { 
  Avatar, 
  Button, 
  TextField, 
  Typography, 
  IconButton, 
  Container, 
  Stack, 
  Divider, 
  Box 
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";

const SettingsPage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | undefined>();
  const [phoneNumber, setPhoneNumber] = useState("+55 34 9148-3143");
  const [status, setStatus] = useState("Available");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
        <Avatar
          src={profileImage}
          sx={{ width: 120, height: 120, marginBottom: 2 }}
        />
        <IconButton
          color="primary"
          component="label"
          sx={{ position: "absolute", bottom: 0, right: "40%" }}
        >
          <PhotoCamera />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </IconButton>
      </Box>

      <Stack spacing={2} divider={<Divider />}>
        {/* Nome */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EditIcon sx={{ marginRight: 1 }} />
          <TextField
            label="Nome"
            defaultValue="Keslley Smith"
            variant="outlined"
            fullWidth
          />
        </Box>

        {/* Telefone */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EditIcon sx={{ marginRight: 1 }} />
          <TextField
            label="Número de telefone"
            value={phoneNumber}
            variant="outlined"
            fullWidth
            disabled
          />
        </Box>

        {/* Status */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EditIcon sx={{ marginRight: 1 }} />
          <TextField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Box>

        {/* Botão de Salvar */}
        <Button variant="contained" color="primary" fullWidth>
          Salvar Alterações
        </Button>
      </Stack>
    </Container>
  );
};

export default SettingsPage;
