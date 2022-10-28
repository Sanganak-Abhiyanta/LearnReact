import Like from "./common/Like";
import React, { Component } from "react";
import TableHeaderSort from "./common/TableHeaderSort";
//at first we use functional component and then we use class component because we have to
//
export default class MoviesTable extends Component {
  columns=[
    {path:'title',label:"Title"}, 
    {path:'genre.name',label:"Genre"},
    {path:'numberInStock',label:"Stock"},
    {path:'dailyRentalRate',label:"Rate"},
    {},//for Like
    {}//for Delete

];
  render() {
    const { movies, onDelete, onLike,sortColumn,onSort } = this.props;
    return (
      <table className="table">
        <TableHeaderSort columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like onClick={() => onLike(movie)} liked={movie.liked} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
