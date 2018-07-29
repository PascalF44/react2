import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function HelloWorld() {
  return <div>Hello</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
