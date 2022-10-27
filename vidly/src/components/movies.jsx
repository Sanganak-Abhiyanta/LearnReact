import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Paginate from "../utils/Paginate";
import Pagination from "./common/Pagination";
import ListGourp from "./common/ListGourp";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };
  // ================> ComponentDidmount <================
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
    this.setState({ selectedGenre: genres, currentPage: 1 });
  };

  // =====================> handleSort method <========================
  handleSort = (sortColumn) => {
   
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    // ==========================>we can use object destructuring <============================
    const {
      currentPage,
      selectedGenre,
      pageSize,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0) return <h1>There are no movies in the Database</h1>;
    // now we need to filter movies according to genre
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);
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
            <p>Showing {filtered.length} movies in the database.</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.hanleDelete}
              onLike={this.handleLiked}
              onSort={this.handleSort}
            />
            <Pagination
              // itemsCount={count}
              itemsCount={filtered.length}
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
