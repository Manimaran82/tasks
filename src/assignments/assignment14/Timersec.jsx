import React, { useEffect, useState } from "react";

const Timersec = () => {
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    let count =1
    const interval = setInterval(() => {
      
      setTimer((prev) =>[...prev,count]);
      count++;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{timer.map((e,i)=>(
        <div key={i}>
          <p>{e}</p>
        </div>
      ))}</h1>
    </div>
  );
};

export default Timersec;