import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { theme } from '@app/theme';

export const StyledTable = styled(ReactTable)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 4px;

  .rt-thead.-header {
    box-shadow: 0 0px 4px 0px rgba(50, 50, 93, 0.3) !important;
  }

  .rt-thead .rt-th {
    padding: ${theme.space[2]}px !important;
  }

  .rt-td {
    justify-content: center;
    align-items: center;
    display: flex;
    white-space: normal !important;
    text-align: center !important;
  }

  .rt-tr-group:hover {
    cursor: pointer;
  }
`;
