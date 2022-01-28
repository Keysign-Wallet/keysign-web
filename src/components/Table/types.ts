export type TableItemType = string | (() => JSX.Element);

export type RowType = {
  rowProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
  row: TableItemType[];
};
