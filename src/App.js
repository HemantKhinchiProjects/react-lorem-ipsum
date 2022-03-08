import React, {useState} from 'react';
import './style.css';
import data from './data.js';

export default function App() {
  const [count,setCount]=useState([0]);
  const submitHandler = (e)=>{e.preventDefault()}
  return (
    <section>
      <h2>lorem ipsum project setup</h2>
      <form>
        <input type="number" onClick={}/>
        <button class={} onClick={submitHandler}></button>
      </form>
    </section>
  );
}
