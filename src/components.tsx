import React, { useState } from 'react';
import './style.css';

export function App(){
  let [counter, setCounter] = useState(0);
  return <div>
    <div data-testid="test-div" className='test'>qwertyu</div>
    
<div data-testid="test-out">{counter}</div>
    <button data-testid="test-btn" onClick={()=>setCounter((last)=>last+1)}>click</button>
  </div>
}

export function FixBug(){
  return <App></App>
}