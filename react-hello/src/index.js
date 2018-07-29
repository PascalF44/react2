import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Message />
      </div>
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

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Pascal</span>
      <span className="handle">@pfi</span>
    </span>
  );
}

function Message() {
  return <div className="message">texte du message à afficher</div>;
}
ReactDOM.render(<Tweet />, document.querySelector("#root"));
