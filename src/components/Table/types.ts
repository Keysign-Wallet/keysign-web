export type TableItemType = string | (() => JSX.Element);

export type RowType = {
  rowProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  row: TableItemType[];
};
