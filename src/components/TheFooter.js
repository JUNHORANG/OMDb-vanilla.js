import { Component } from "../core/core.js";

export default class TheFooter extends Component {
  constructor() {
    super({ tagName: "footer" });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <div>
      <a href="https://github.com/JUNHORANG/OMDb-vanillaJs">GitHub Repository
    </div>
    <div>
      <a href="https://github.com/JUNHORANG">
        ${new Date().getFullYear()} JUNHO
      </a>
    </div>
    `;
  }
}
