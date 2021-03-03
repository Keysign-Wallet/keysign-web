import React from 'react';
import Table from './Table';
import { TableItemType, RowType } from './types';

const TableContainer: React.FC<{
  headings: TableItemType[];
  rows: RowType[];
  title: TableItemType;
  rowLimit?: number;
}> = ({ headings, rows, title, rowLimit }) => {
  const slicedRows = rowLimit ? rows.filter((_, index) => index < rowLimit) : rows;
  return <Table headings={headings} rows={slicedRows} title={title} />;
};

export default TableContainer;
