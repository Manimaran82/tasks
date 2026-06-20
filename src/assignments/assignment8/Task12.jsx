import React, { useState } from "react";

const Task12 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      username,
      password,
    });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h3>Username: {userData.username}</h3>
      <h3>Password: {userData.password}</h3>
    </div>
  );
};

export default Task12;