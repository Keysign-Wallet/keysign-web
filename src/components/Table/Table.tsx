import React from 'react';
import { mergeClasses } from '../../utils/helpers';
import { TableItemType, RowType } from './types';
import './Table.scss';

const Table: React.FC<{ headings: TableItemType[]; rows: RowType[]; title: TableItemType }> = ({
  headings,
  rows,
  title,
}) => (
  <>
    <div className="Table__header keysign-default-border">
      {typeof title === 'function' ? title() : <h2 className="Table__heading text-keysign-primary">{title}</h2>}
    </div>
    <div className="Table__wrapper keysign-default-border">
      <table className="Table">
        <thead className="Table__col-headings text-keysign-grey border-keysign-offwhite-i">
          <tr>
            {headings.map((heading) => (typeof heading === 'function' ? <td>{heading()}</td> : <td>{heading}</td>))}
          </tr>
        </thead>

        {/* Remember to Use a unique key instead of index */}
        <tbody className="Table__row">
          {rows.map(({ rowProps = {}, row }, i) => (
            <tr
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rowProps}
              className={mergeClasses(rowProps.className || '', 'keysign-default-border')}
              key={rowProps.key || i}
            >
              {row.map((rowData, index) =>
                typeof rowData === 'function' ? <td>{rowData()}</td> : <td key={index}>{rowData}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default Table;
