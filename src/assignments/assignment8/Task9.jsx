import React, { useState } from "react";

const Task9 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Uppercase Converter</h2>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Uppercase Text: {text.toUpperCase()}</h3>
    </div>
  );
};

export default Task9;