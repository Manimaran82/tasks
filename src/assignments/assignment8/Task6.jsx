import React, { useState } from "react";

const Task6 = () => {
  const [city, setCity] = useState("");

  return (
    <div>
      <h2>City Selection</h2>

      <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />

      <h3>Selected City: {city}</h3>
    </div>
  );
};

export default Task6;