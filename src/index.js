import '@babel/polyfill';
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.js";

// import "./styles/base.scss";
// import "./styles/layout.scss";
// import "./styles/modules.scss";
// import "./styles/jan.scss";
// import "./styles/grid.scss";
import "./styles/boxes.scss";

function Index() {
    return <App />;
}

ReactDOM.render(<Index />, document.getElementById("root"));
