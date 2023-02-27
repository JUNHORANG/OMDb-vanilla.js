import { Component } from "../core/core.js";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
    <input placeholder="Enter the movie title to search">
    <button class="btn btn-primary">Searsh</button>
    `;

    const inputEl = this.el.querySelector("input");
    const buttonEl = this.el.querySelector(".btn");

    inputEl.addEventListener("input", () => {});
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      }
    });
    buttonEl.addEventListener("click", () => {});
  }
}
