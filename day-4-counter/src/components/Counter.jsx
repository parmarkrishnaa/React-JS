import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleStart = () => {
      setIsActive(true);
    }

    const handleStop = () => {
      setIsActive(false);
    }

    const handleReset = () => {
      setCount(0);
      setIsActive(false);
    }

    useEffect(() => {
      let interval;

      if(isActive){
        interval = setInterval(() => {
          setCount((count) => count + 1);
        }, 1000);
      }

      return(() => {
        clearInterval(interval);
      })
    }, [isActive]);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter