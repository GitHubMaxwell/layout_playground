import '@babel/polyfill';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/modules.scss";
import "./styles/jan_style.scss";
class Index extends Component {
    render() {
        return <App />;
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
