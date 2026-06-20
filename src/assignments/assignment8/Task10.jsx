import React, { useState } from "react";

const Task10 = () => {
  const [text, setText] = useState("");
  const [lowerText, setLowerText] = useState("");

  const convertToLowercase = () => {
    setLowerText(text.toLowerCase());
  };

  return (
    <div>
      <h2>Lowercase Converter</h2>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={convertToLowercase}>
        Convert
      </button>

      <h3>Lowercase Text: {lowerText}</h3>
    </div>
  );
};

export default Task10;