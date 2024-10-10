import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;             // Remove margens
    padding: 0;            // Remove preenchimentos
    box-sizing: border-box; // Inclui padding e border na largura e altura
  }

  html, body {
    height: 100%;          // Garante que o body ocupe toda a altura
    overflow: hidden;      // Impede rolagem
    font-family: 'Roboto', sans-serif; // Define sua fonte padrão
  }

  #root {
    height: 100%;          // Garante que o root ocupe toda a altura
  }
`;

export default GlobalStyle;

export {}; 