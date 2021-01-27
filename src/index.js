import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // webpack support this import and inject it

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
