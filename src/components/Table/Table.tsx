import React from 'react';
import { TableItemType } from './types';
import './Table.scss';

const Table: React.FC<{ headings: TableItemType[]; rows: TableItemType[][]; title: TableItemType }> = ({
  headings,
  rows,
  title,
}) => (
  <div className="Table keysign-default-border">
    <div className="Table__header">
      {typeof title === 'function' ? title() : <h2 className="Table__heading text-keysign-primary">{title}</h2>}
    </div>
    <div className="Table__col-headings text-keysign-grey border-keysign-offwhite-i">
      {headings.map((heading) => (typeof heading === 'function' ? heading() : <div>{heading}</div>))}
    </div>
    {/* <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div>
    <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div>
    <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div> */}
    {rows.map((row) => (
      <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
        {row.map((rowData) => (typeof rowData === 'function' ? rowData() : <div>{rowData}</div>))}
      </div>
    ))}
  </div>
);

export default Table;
