import React from 'react';
import Table from './Table';
import { TableItemType } from './types';

const TableContainer: React.FC<{ headings: TableItemType[]; rows: TableItemType[][]; title: TableItemType }> = ({
  headings,
  rows,
  title,
}) => {
  return <Table headings={headings} rows={rows} title={title} />;
};

export default TableContainer;
