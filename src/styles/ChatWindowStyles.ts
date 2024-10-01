import styled from 'styled-components';


export const ChatWindowContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MessageArea = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  overflow-y: auto;
`;

export const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;