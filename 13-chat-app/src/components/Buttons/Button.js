import React from "react";
import Attach from "./Attach";
import Danger from "./Danger";
import Emoji from "./Emoji";
import Google from "./Google";
import Primary from "./Primary";
import Send from "./Send";

const Button = ({ type = "submit", children, onClick }) => {
  switch (type) {
    case "google":
      return <Google text={children} onClick={onClick} />;
    case "danger":
      return <Danger text={children} onClick={onClick} />;
    case "attach":
      return <Attach />;
    case "emoji":
      return <Emoji />;
    case "send":
      return <Send />;
    default:
      return <Primary text={children} type="submit" />;
  }
};

export default Button;
