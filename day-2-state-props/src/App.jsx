import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }
  
  return (
    <>
      <h2>Count {count}</h2>
      <button onClick={handleCount}>Increase</button>
    </>
  )
}

export default App;