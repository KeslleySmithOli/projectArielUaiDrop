import React, { useState } from 'react';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Logo,
} from 'src/styles/LoginStyles';
import { useNavigate } from 'react-router-dom';
import uaiLogo from '../assets/uaiLogo.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      navigate('/chat');  // Redireciona para a tela de chat
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Logo src={uaiLogo} alt="Logo" /> {/* Adicione o logo aqui */}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
