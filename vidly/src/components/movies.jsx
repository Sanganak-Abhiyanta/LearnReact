import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  hanleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLiked=(movie)=>{
    const movies=[...this.state.movies];
    const index=movies.indexOf(movie);
    movies[index]={...movies[index]};
    movies[index].liked=!movies[index].liked;
    this.setState({movies});

  }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <h1>There are no movies in the Database</h1>;
    return (
      <>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                  <Like onClick={()=> this.handleLiked(movie)} liked={movie.liked}/>
                  </td>
                  <td>
                    <button
                      onClick={() => this.hanleDelete(movie)}
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
      </>
    );
  }
}
