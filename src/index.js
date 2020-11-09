import React from "react";
import ReactDOM from "react-dom";
import FEATURES from "./Features";
import "./index.css";
import App from "./App";

ReactDOM.render(<App features={FEATURES} />, document.getElementById("root"));
