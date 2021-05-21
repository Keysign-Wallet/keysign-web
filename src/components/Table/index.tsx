import React from 'react';
import Placeholder from '../common/Placeholder';
import Table from './Table';
import { TableItemType, RowType } from './types';

const TableContainer: React.FC<{
  headings: TableItemType[];
  rows: RowType[];
  title: TableItemType;
  rowLimit?: number;
  loading?: boolean;
  expectedRowCount?: number;
}> = ({ headings, rows, title, rowLimit, loading }) => {
  const slicedRows = rowLimit ? rows.filter((_, index) => index < rowLimit) : rows;
  const loaderRows: RowType[] = rows.map(() => ({
    row: new Array(headings.length).fill(() => <Placeholder className="Table__placeholder" />),
  }));
  return <Table headings={headings} rows={loading ? loaderRows : slicedRows} title={title} />;
};

export default TableContainer;
