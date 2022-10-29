import Like from "./common/Like";
import React, { Component } from "react";
// import TableHeaderSort from "./common/TableHeaderSort";
// import TableBody from "./common/TableBody";
import Table from "./common/Table";
//at first we use functional component and then we use class component because we have to
//
export default class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          onClick={() => this.props.onLike(movie)}
          liked={movie.liked}
        ></Like>
      ),
    }, //for Like
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    }, //for Delete
  ];
  render() {
    // const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={movies} />
    );
  }
}
