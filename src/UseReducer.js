import React, { useReducer } from 'react';

function UseReducer() {
    
  function reducer(state, action) {
    if (action.type === '+') {
      return state + 1;
    } else if (action.type === '-') {
      return state - 1;
    } else {
      return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);
 

  return (
    <div className='UseReducer'>
    <h1>Use Reducer</h1>
      <button onClick={() => dispatch({ type: '+' })}>Add</button>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: '-' })}>Reduce</button>
      <img src="https://www.pixel4k.com/wp-content/uploads/2021/04/iron-man-gauntlet-4k_1617446727.jpg.webp" alt="" />
    </div>
  );
}

export default UseReducer;
