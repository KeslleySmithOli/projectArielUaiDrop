import styled from 'styled-components';

// Container principal do FlowEditor
export const FlowEditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

// Barra superior (TopBar) contendo a seta de voltar e os botões de ação
export const TopBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// Botão de voltar (seta)
export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &:hover {
    opacity: 0.8;
  }
`;

// Wrapper para os botões no lado direito (Start e Publicar)
export const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

// Botão "Publicar" com cor azul
export const PublishButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Botão de "Start" com ícone de play
export const StartButton = styled.button`
  background-color: #fff;
  border: 2px solid #fff; /* Borda preta */
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Sidebar flutuante
export const SidebarFloating = styled.div`
  position: absolute;
  top: 70px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Botão flutuante
export const FloatingButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
