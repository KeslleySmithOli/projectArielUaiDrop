import React, { useState } from 'react';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
} from 'src/styles/LoginStyles';  // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';  // Altere para useNavigate

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Substitua useHistory por useNavigate

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação, se necessário.
    // Para o exemplo, vamos apenas redirecionar para a tela de chat.
    if (username && password) {
      navigate('/chat');  // Redireciona para a tela de chat
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
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
