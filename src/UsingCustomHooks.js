import React from 'react'
import UseCustomHooks from './UseCustomHooks';

export default function UsingCustomHooks() {
    const[count,increment,decrement,reset]=UseCustomHooks();
  return (
    <div className="App">
    <h1>Here we Use Custom Hooks</h1>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
      <img src='https://images8.alphacoders.com/815/thumb-1920-815755.jpg' alt="" />
    </div>
  
  )
}
