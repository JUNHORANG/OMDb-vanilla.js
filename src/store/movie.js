import { Store } from "../core/core.js";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: "Search for the Title",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (err) {
    console.log("searchMovies error:", err);
  } finally {
    store.state.loading = false;
  }
};