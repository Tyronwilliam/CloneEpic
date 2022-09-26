import React from "react";

function Button({ onClick, content, myClass }) {
  return (
    <button onClick={onClick} className={myClass}>
      <p>{content}</p>
    </button>
  );
}

export default Button;
