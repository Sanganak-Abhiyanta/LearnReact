import React from "react";
import TableBody from "./TableBody";
import TableHeaderSort from "./TableHeaderSort";
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
