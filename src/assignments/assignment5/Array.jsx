import React, { useState } from 'react';

function Array() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango"
  ]);

  return (
    <div>
      <h1>Fruits List</h1>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default Array;