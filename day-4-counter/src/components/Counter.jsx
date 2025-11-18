import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setCount(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const format = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const min = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const sec = String(totalSeconds % 60).padStart(2, "0");

    return `${hrs}:${min}:${sec}`;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="stopwatch">
            <div className="timer-wrapper">
              <div className="timer">
                <h2>{format(count)}</h2>
              </div>
            </div>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
