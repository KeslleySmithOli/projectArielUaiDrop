// src/pages/Contacts.tsx
import React, { useState } from 'react';

const Contacts: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Simulação de dados de contatos (substitua pelo que você tem ou carregue do Firebase)
    const contacts = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        // Adicione mais contatos conforme necessário
    ];

    // Filtra contatos com base na barra de pesquisa
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
          <h2>Contatos</h2>
          <input
              type="text"
              placeholder="Pesquisar contatos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
              {filteredContacts.length > 0 ? (
                  filteredContacts.map(contact => (
                      <li key={contact.id}>{contact.name}</li>
                  ))
              ) : (
                  <li>Nenhum contato encontrado.</li> // Mensagem se não houver contatos
              )}
          </ul>
      </div>
  );
};

export default Contacts;
