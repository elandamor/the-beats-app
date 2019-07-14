import React, { FC } from 'react';
import { RowInfo } from 'react-table';
// Styles
import { StyledTable } from './styles';
import Box from '../Box';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Table');

interface ITableProps {
  columns: any[];
  data: any[];
  defaultPageSize?: number;
  loading?: boolean;
  onRowClick?: (rowInfo: RowInfo) => void;

  wrapperProps?: { [key: string]: any };
}

/**
 * @render react
 * @name Table component
 * @description Table component.
 * @example
 * <Table />
 */

const Table: FC<ITableProps> = (props) => {
  const { columns, data, defaultPageSize, loading } = props;

  const _handleRowClick = (rowInfo: RowInfo) => {
    const { onRowClick } = props;

    if (onRowClick) {
      onRowClick(rowInfo);
    }

    return null;
  };

  return (
    <Box width="100%">
      <StyledTable
        getTrProps={(props: any, rowInfo?: RowInfo) => {
          if (rowInfo) {
            return {
              onClick: () => {
                _handleRowClick(rowInfo);
              },
            };
          }
          return {};
        }}
        data={data}
        columns={columns}
        loading={loading}
        className="-striped -highlight"
        defaultPageSize={defaultPageSize}
      />
    </Box>
  );
};

Table.defaultProps = {
  defaultPageSize: 10,
};

export default Table;
