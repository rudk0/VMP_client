import React from "react";
import './AoTable.scss'
import {useTable, useRowSelect} from 'react-table'
import {cn} from "@bem-react/classname";
const tableCn = cn('table');
const IndeterminateCheckbox = React.forwardRef(
  ({indeterminate, row, changeState, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} onClick={e=>changeState ? changeState(row) : null} />
      </>
    )
  }
)
export const AoTable = ({columns, data, changeState}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {selectedRowIds},
  } = useTable({
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({getToggleAllRowsSelectedProps}) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({row}) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} row={row} changeState={changeState} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
console.log(selectedRowIds);
  return (
    <table {...getTableProps()} className={tableCn('container')}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )

}