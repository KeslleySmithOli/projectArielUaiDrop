import React from 'react';
import styled from 'styled-components';

const ConversationListContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const ConversationList: React.FC = () => {
  return (
    <ConversationListContainer>
      <p>Conversa 1.</p>
      <p>Conversa 2</p>
      <p>Conversa 3</p>
    </ConversationListContainer>
  );
};

export default ConversationList;
