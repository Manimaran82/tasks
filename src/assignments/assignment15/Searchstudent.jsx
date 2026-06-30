import React, { useState } from 'react';

const Searchstudent = () => {
  const [search, setSearch] = useState("");

  const students = ["Manimaran", "Dinesh", "Sanjai"];

  const handle = (e) => {
    setSearch(e.target.value);
  };

  const searchname = students.filter((e) =>
    e.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={search}
            onChange={handle}
            placeholder="Search the Name"
          />
        </div>

        {searchname.map((e, i) => (
          <div key={i + 1}>
            <p>{e}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Searchstudent;