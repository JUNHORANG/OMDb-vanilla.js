import { Component } from "../core/core.js";
import movieStore, { searchMovies } from "../store/movie.js";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
    <input 
    placeholder="Enter the movie title to search">
    <button class="btn btn-primary">Searsh</button>
    `;

    const inputEl = this.el.querySelector("input");
    const buttonEl = this.el.querySelector(".btn");

    inputEl.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
    buttonEl.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
