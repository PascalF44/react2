import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
      </div>
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionsButton />
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

const NameWithHandle = () => (
  <span className="name-with-handle">
    <span className="name">Pascal</span>
    <span className="handle">@pascal44</span>
  </span>
);

const Message = () => (
  <div className="message">le texte du message à afficher...</div>
);

const Time = () => <span className="time">3mn ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
