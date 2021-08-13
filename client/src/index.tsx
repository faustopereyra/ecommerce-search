import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./root";
import App from "./App";
import "./app.css";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <Router>
        <App />
      </Router>
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
