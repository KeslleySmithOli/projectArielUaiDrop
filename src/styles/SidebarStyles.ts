import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const SidebarContainer = styled.div`
    width: 70px; /* Aumenta a largura da Sidebar */
    height: 100vh;
    background-color: #00000;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px;
`;

export const StyledIconButton = styled(IconButton)`
  margin-bottom: 20px; /* Espaçamento entre os ícones */
  &:last-child {
    margin-bottom: 0; /* Remove o espaçamento do último ícone */
  }
`;

export const Spacer = styled.div`
  flex-grow: 0.9; /* O spacer vai crescer para empurrar o último ícone para baixo */
`;

export const Divider = styled('div')({
  width: '100%',
  height: '2px',
  backgroundColor: '#ccc',
  margin: '25px 0',
  borderRadius: '100%',
});