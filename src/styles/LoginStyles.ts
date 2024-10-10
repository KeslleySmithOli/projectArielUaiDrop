import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  // Preenche a altura da tela
  width: 100vw;   // Preenche a largura da tela
  margin: 0;      // Remove margens
  padding: 0;     // Remove preenchimento
  box-sizing: border-box; // Inclui padding e border na largura e altura
  background: linear-gradient(to right, #6a11cb, #2575fc); // Gradiente de fundo
`;

export const LoginForm = styled.form`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 100px 1000px rgba(0, 0, 0, 0.2); // Sombra mais suave
`;

export const Logo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-bottom: 15px; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff; // Altera a cor da borda ao focar
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Efeito de sombra ao focar
  }
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s; // Transição suave

  &:hover {
    background-color: #0056b3; 
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
