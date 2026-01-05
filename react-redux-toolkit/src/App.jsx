import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './feature/counterSlice';

const App = () => {

  const {count} = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button type='button' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;