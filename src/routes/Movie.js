import { Component } from "../core/core.js";
import movieStore, { getMovieDetails } from "../store/movie.js";

export default class Movie extends Component {
  async render() {
    this.el.classList.add("container", "the-movie");
    this.el.innerHTML = /* html */ `
    <div class="poster skeleton"></div>
    <div class="specs">
      <div class="title skeleton"></div>
      <div class="labels skeleton"></div>
      <div class="plot skeleton"></div>
    </div>
    `;

    await getMovieDetails(history.state.id);
    const { movie } = movieStore.state;
    const birPoster = movie.Poster.replace("SX300", "SX700");

    let ratings = movie.Ratings.map((rating) => {
      const value = [];
      for (const key in rating) {
        value.push(rating[key]);
      }
      return `<p>${value.join(" - ")}</p>`;
    });

    this.el.innerHTML = /*html*/ `
    <div
    style="background-image:url(${birPoster})"
    class="poster"></div>
    <div class="specs">
      <div class="title">${movie.Title}</div>
      <div class="labels">
        <span>${movie.Released}</span>
        &nbsp;/&nbsp;
        <span>${movie.Runtime}</span>
        &nbsp;/&nbsp;
        <span>${movie.Country}</span>
      </div>
      <div class="plot">${movie.Plot}</div>
      <div>
        <h3>Ratings</h3>
        ${ratings.join("")}
      </div>
      <div>
        <h3>Actors</h3>
        <p>${movie.Actors}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>${movie.Director}</p>
      </div>
      <div>
        <h3>Production</h3>
        <p>${movie.Production}</p>
      </div>
      <div>
        <h3>Genre</h3>
        <p>${movie.Genre}</p>
      </div>
    </div>
    `;
  }
}
