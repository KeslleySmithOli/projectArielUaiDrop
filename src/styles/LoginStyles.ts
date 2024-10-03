import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  // Preenche a tela
  background-color: #f9f9f9;
`;

export const LoginForm = styled.form`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  width: 300px;  // Largura do formulário
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 15px;  // Espaço entre os inputs
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;  // Escurece ao passar o mouse
  }
`;
