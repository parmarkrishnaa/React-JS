import React, { useState } from 'react';
import '../src/App.css';
import Demo from './components/Demo.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [showCom, setShowCom] = useState(false);
  const [demoText, setDemoText] = useState('Hello from Demo Component!');

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleShow = () => {
    setShowCom(true);
    setDemoText('Demo component is visible.');
  }
  
  const handleHide = () => {
    setDemoText('Demo component is hidden.');
    setShowCom(false);
  }
  
  const handleToggle = () => {
    if(showCom){
      setDemoText('Toggle: Component is hidden.');
      setShowCom(false);
    } else {
      setDemoText('Toggle: Component is visible.');
      setShowCom(true);
    }
  }

  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <h2>Count: {count}</h2>
      <button className='click' onClick={handleCount}>Click Me</button><br />
      <p>{demoText}</p>
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
      <button onClick={handleToggle}>Toggle</button>
      
      {showCom ? <Demo text={demoText} /> : null}

    </React.Fragment>
  )
}

export default App;