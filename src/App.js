import { Component } from "../src/core/core.js";
import TheHeader from "./components/TheHeader.js";
import TheFooter from "./components/TheFooter.js";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-View");

    this.el.append(theHeader, routerView, theFooter);
  }
}
