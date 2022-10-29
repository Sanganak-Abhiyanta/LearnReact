import React from "react";
import TableBody from "./TableBody";
import TableHeaderSort from "./TableHeaderSort";

// we can also write line number 7 like this
// export default function Table({columns,sortColumn,onSort,data}){}...
export default function Table(props) {
    const {columns,sortColumn,onSort,data}=props;
  return (
    <table className="table">
      <TableHeaderSort
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
}
