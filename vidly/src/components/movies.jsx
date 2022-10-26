import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Paginate from "../utils/Paginate";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import ListGourp from "./common/ListGourp";
import { getGenres } from "../services/fakeGenreService";
export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };
  // ================> ComponentDidmount <================
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  // ==================================================> HandleDelete<===================================================
  hanleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  // ==================================>HandleLiked<===============================================
  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  // ================================>HandlePageChange<=========================================================
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    // console.log("Page Changed ", page);
  };

  // ===================> HandleGenresSelect <=============
  handleGenresSelect = (genres) => {
    this.setState({selectedGenre:genres});
  };

  render() {
    const { length: count } = this.state.movies;
    // ==========================>we can use object destructuring <============================
    const { currentPage, pageSize, movies: allMovies } = this.state;

    if (count === 0) return <h1>There are no movies in the Database</h1>;
    const movies = Paginate(allMovies, currentPage, pageSize);
    return (
      <div className="m-5">
        <div className="row">
          <div className="col-2">
            <ListGourp
              items={this.state.genres}
              onItemSelect={this.handleGenresSelect}
              selectedItems={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            {" "}
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
                {movies.map((movie) => {
                  return (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          onClick={() => this.handleLiked(movie)}
                          liked={movie.liked}
                        />
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
            <Pagination
              itemsCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
