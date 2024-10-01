import React from 'react';
import { ConversationListContainer, SectionTitle , BodyContainer, BoxContainer} from 'src/styles/ConversationStyles';

<div>

<BoxContainer>

  <SectionTitle>Contatos</SectionTitle>

</BoxContainer>

</div>

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
