import React from 'react';
import Table from './Table';
import { TableItemType } from './types';

const TableContainer: React.FC<{ headings: TableItemType[]; rows: TableItemType[][] }> = ({ headings, rows }) => {
  return <Table headings={headings} rows={rows} />;
};

export default TableContainer;
