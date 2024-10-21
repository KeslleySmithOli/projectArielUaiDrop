import styled from 'styled-components';

// Container principal do FlowEditor
export const FlowEditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

// Sidebar flutuante
export const SidebarFloating = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Botão flutuante
export const FloatingButton = styled.div`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// Label para os botões flutuantes
export const FloatingButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;
