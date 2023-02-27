import { Component } from "../src/core/core.js";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-View");

    this.el.append(routerView);
  }
}
