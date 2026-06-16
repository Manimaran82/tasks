import React, { useState } from 'react';

function Object() {
  const [user, setUser] = useState({
    name: "Manimaran",
    age: 22,
    city: "Karaikal"
  });

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h3>City: {user.city}</h3>
    </div>
  );
}

export default Object;