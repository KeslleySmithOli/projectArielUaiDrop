import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Node,
  NodeChange, // Importando o tipo NodeChange
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css"; // Importando os estilos padrões do React Flow
import {
  FlowEditorContainer,
  TopBar,
  BackButton,
  ActionButtons,
  PublishButton,
  StartButton,
  SidebarFloating,
  FloatingButton,
} from "../styles/FlowEditorStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Ícone de seta para voltar
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; // Ícone de play (start)
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CodeIcon from "@mui/icons-material/Code";
import FlashOnIcon from "@mui/icons-material/FlashOn"; // Ícone de Ação
import AddIcon from "@mui/icons-material/Add";

const FlowEditor: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nodes, setNodes] = useState<Node[]>([]); // Estado para gerenciar os nodes

  // Função para lidar com o botão de voltar
  const handleGoBack = () => {
    navigate("/chat"); // Navega para a tela de mensagens
  };

  // Função para adicionar um novo node
  const addNode = () => {
    const newNode: Node = {
      id: `${nodes.length + 1}`, // Um ID único baseado no comprimento atual dos nodes
      position: { x: Math.random() * 250, y: Math.random() * 250 }, // Posição aleatória no canvas
      data: { label: `Novo node ${nodes.length + 1}` }, // Exemplo de label para o node
      type: "default", // Tipo de node
    };
    setNodes((prevNodes) => [...prevNodes, newNode]); // Adiciona o novo node à lista
  };

  // Função para lidar com mudanças nos nodes (como mover)
  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)), // Tipando explicitamente 'changes' como NodeChange[]
    []
  );

  return (
    <FlowEditorContainer>
      {/* Top Bar */}
      <TopBar>
        {/* Botão de voltar */}
        <BackButton onClick={handleGoBack}>
          <ArrowBackIcon style={{ fontSize: "30px", color: "#000" }} />
        </BackButton>

        {/* Botões de ação (Start e Publicar) */}
        <ActionButtons>
          <StartButton>
            <PlayArrowIcon style={{ fontSize: "20px", color: "#006400" }} />{" "}
            {/* Cor verde com código correto */}
          </StartButton>
          <PublishButton>Publicar</PublishButton>
        </ActionButtons>
      </TopBar>

      {/* React Flow Component */}
      <ReactFlow
        nodes={nodes} // Passa os nodes do estado
        edges={[]} // Se precisar, adicione os edges
        onNodesChange={onNodesChange} // Função para atualizar a posição dos nodes ao movê-los
        onEdgesChange={() => {}} // Se necessário, adicione a lógica de mudança de edges
        onConnect={() => {}}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {/* Sidebar Flutuante para opções do bot */}
      <SidebarFloating>
        <AddIcon
          onClick={addNode}
          style={{ fontSize: "30px", color: "#333", cursor: "pointer" }}
        />

        <ChatBubbleOutlineIcon
          style={{ fontSize: "23px", color: "#333", cursor: "pointer" }}
        />

        <CodeIcon
          style={{ fontSize: "30px", color: "#333", cursor: "pointer" }}
        />
      </SidebarFloating>
    </FlowEditorContainer>
  );
};

export default FlowEditor;
