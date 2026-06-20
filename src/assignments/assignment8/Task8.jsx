import React, { useState } from "react";

const Task8 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Character Counter</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Character Count: {text.length}</h3>
    </div>
  );
};

export default Task8;