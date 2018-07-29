import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      Hello
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://gravatar.com/avatar/0321e6c633cd91e943cd0c1f07f4f5c7"
      className="avatar"
      alt="avatar"
    />
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));
