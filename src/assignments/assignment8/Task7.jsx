import React, { useState } from "react";

const Task7 = () => {
  const [course, setCourse] = useState("");

  return (
    <div>
      <h2>Course Registration</h2>

      <input
        type="text"
        placeholder="Enter Course Name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <h3>Selected Course: {course}</h3>
    </div>
  );
};

export default Task7;