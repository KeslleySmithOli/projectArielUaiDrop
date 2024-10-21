import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css'; // Importando os estilos padrões do React Flow
import { FlowEditorContainer, SidebarFloating, FloatingButton, FloatingButtonLabel } from '../styles/FlowEditorStyle'; // Certifique-se de que esses estilos estão corretos
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Ícone de seta para voltar

const FlowEditor: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o botão de voltar
  const handleGoBack = () => {
    navigate('/chat'); // Navega para a tela de mensagens
  };

  return (
    <FlowEditorContainer>
      {/* Botão de voltar */}
      <button
        onClick={handleGoBack}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <ArrowBackIcon style={{ fontSize: '30px', color: '#000' }} /> {/* Ícone de seta */}
      </button>

      {/* React Flow Component */}
      <ReactFlow
        nodes={[]}  // Defina os nodes corretamente
        edges={[]}  // Defina os edges corretamente
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        onConnect={() => {}}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      
      {/* Sidebar Flutuante para opções do bot */}
      <SidebarFloating>
        {/* Exemplos de botões flutuantes */}
        <FloatingButton>
          <FloatingButtonLabel>Nova Mensagem</FloatingButtonLabel>
        </FloatingButton>
        <FloatingButton>
          <FloatingButtonLabel>Condição</FloatingButtonLabel>
        </FloatingButton>
        <FloatingButton>
          <FloatingButtonLabel>Ação</FloatingButtonLabel>
        </FloatingButton>
      </SidebarFloating>
    </FlowEditorContainer>
  );
};

export default FlowEditor;
