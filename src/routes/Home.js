import { Component } from "../core/core.js";
import Headline from "../components/Headline.js";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;

    this.el.classList.add("container");
    this.el.append(headline);
  }
}
