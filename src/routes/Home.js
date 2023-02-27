import { Component } from "../core/core.js";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.innerHTML = /* html */ `
    <h1>hello</h1>
    `;
  }
}
